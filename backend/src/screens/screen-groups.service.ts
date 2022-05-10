import { Injectable, Request } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Screen } from './entities/screen.entity';
import { PlayerDto } from './entities/player.entity';
import { ScreenGroup } from './entities/screen-group.entity';
import { Parameter } from './entities/parameter.entity';

@Injectable()
export class ScreenGroupsService {
  constructor(
    @InjectRepository(ScreenGroup)
    private screenGroupsRepository: Repository<ScreenGroup>,
  ) {}

  create(group: ScreenGroup) {
    return this.screenGroupsRepository.save(group);
  }

  findAll(): Promise<ScreenGroup[]> {
    return this.screenGroupsRepository.find();
  }

  findOne(id: number): Promise<ScreenGroup> {
    return this.screenGroupsRepository.findOne(id);
  }

  update(id: number, group: ScreenGroup) {
    return this.screenGroupsRepository.update(id, group);
  }

  remove(id: number) {
    return this.screenGroupsRepository.delete(id);
  }
}
