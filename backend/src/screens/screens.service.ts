import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Between, Like, Repository } from 'typeorm';
import { Screen } from './entities/screen.entity';
import { PlayerDto } from './entities/player.entity';
import { ScreenGroup } from './entities/screen-group.entity';
import { Parameter } from './entities/parameter.entity';
import { ScreenShot } from './entities/screen-shot.entity';
import { ScreenLog } from './entities/screen-log.entity';
import { ServerTimeInfo } from './entities/server-time-info.entity';

@Injectable()
export class ScreensService {
  constructor(
    @InjectRepository(Screen)
    private screensRepository: Repository<Screen>,
    @InjectRepository(Parameter)
    private parametersRepository: Repository<Parameter>,
    @InjectRepository(ScreenShot)
    private screenShotsRepository: Repository<ScreenShot>,
    @InjectRepository(ScreenLog)
    private screenLogsRepository: Repository<ScreenLog>,
  ) {}

  create(screen: Screen) {
    return this.screensRepository.save(screen);
  }

  findAll(): Promise<Screen[]> {
    return this.screensRepository.find();
  }

  findOne(id: number): Promise<Screen> {
    return this.screensRepository.findOne(id);
  }

  update(id: number, screen: Screen) {
    return this.screensRepository.update(id, screen);
  }

  remove(id: number) {
    return this.screensRepository.delete(id);
  }

  async getPlayerInfo(screen: Screen, ip: string): Promise<PlayerDto> {
    const dto = new PlayerDto();
    const actualScreen = await this.screensRepository.findOne({
      serial: screen.serial,
    });
    if (actualScreen) {
      await this.screensRepository.save({
        id: actualScreen.id,
        lastUpdatedAt: new Date(),
        shutdown: false,
        startup: false,
      });
      if (actualScreen.active) {
        const dosyaUrl = await this.parametersRepository.findOne({
          code: 'dosyaUrl',
        });
        dto.screen = actualScreen;
        dto.dosyaUrl = dosyaUrl;
        dto.serverTimeInfo = new ServerTimeInfo();
      } else {
        dto.notActive = true;
      }
    } else {
      const newScreen = new Screen();
      newScreen.serial = screen.serial;
      newScreen.name = screen.serial;
      newScreen.platform = screen.platform;
      newScreen.ip = ip;
      newScreen.group = new ScreenGroup(1);
      newScreen.active = false;
      newScreen.updateSecond = 600;
      newScreen.updateRandom = true;
      newScreen.takeSs = false;
      newScreen.shutdown = false;
      newScreen.startup = false;
      newScreen.workingHours = null;
      newScreen.createdAt = new Date();
      newScreen.lastUpdatedAt = newScreen.createdAt;
      await this.screensRepository.save(newScreen);
      dto.registered = true;
    }

    return dto;
  }

  async uploadScreenShot(
    file: Express.Multer.File,
    serial: string,
    shotDate: string,
  ): Promise<string> {
    const screenShot = new ScreenShot();
    const screen = await this.screensRepository.findOne({ serial });
    if (screen.active) {
      screenShot.screenId = screen.id;
      screenShot.createdAt = new Date();
      screenShot.shotAt = new Date(shotDate);
      screenShot.image = file.buffer;
      await this.screenShotsRepository.save(screenShot);
      await this.screensRepository.save({ id: screen.id, takeSs: false });
    }
    return 'OK';
  }

  async findScreenShots(query): Promise<ScreenShot[]> {
    try {
      const screenId = Number(query.screenId);
      return await this.screenShotsRepository.find({
        where: {
          screenId,
          createdAt: Between(
            new Date(query.startDate).toISOString(),
            new Date(query.endDate).toISOString(),
          ),
        },
      });
    } catch (err) {
      console.log(err);
      throw err;
    }
  }

  async saveLogs(serial: string, lines: string): Promise<string> {
    const screen = await this.screensRepository.findOne({ serial });
    if (screen) {
      for (const line of lines.split('\r\n')) {
        const [name, logDate] = line.split(';');
        if (name && logDate) {
          const screenLog = new ScreenLog();
          screenLog.screenId = screen.id;
          screenLog.logAt = new Date(logDate);
          screenLog.createdAt = new Date();
          screenLog.name = name;
          await this.screenLogsRepository.save(screenLog);
        }
      }
    }

    return 'OK';
  }

  async findScreenLogs(query): Promise<ScreenLog[]> {
    try {
      const where = {
          createdAt: Between(
            new Date(query.startDate).toISOString(),
            new Date(query.endDate).toISOString(),
          ),
        };
      if (query.screenId) {
        where['screenId'] = Number(query.screenId);
      }
      if (query.name) {
        where['name'] = Like(`%${query.name}%`);
      }
      return await this.screenLogsRepository.find({ where });
    } catch (err) {
      console.log(err);
      throw err;
    }
  }
}
