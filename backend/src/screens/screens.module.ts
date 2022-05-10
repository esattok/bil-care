import { Module } from '@nestjs/common';
import { ScreensService } from './screens.service';
import { ScreensController } from './screens.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Screen } from './entities/screen.entity';
import { PlayerController } from './player.controller';
import { Parameter } from './entities/parameter.entity';
import { ScreenGroupsController } from './screen-groups.controller';
import { TemplatesController } from './templates.controller';
import { ScreenGroupsService } from './screen-groups.service';
import { ScreenGroup } from './entities/screen-group.entity';
import { ParametersController } from './parameters.controller';
import { ParametersService } from './parameters.service';
import { ScreenShot } from './entities/screen-shot.entity';
import { ScreenLog } from './entities/screen-log.entity';
import { Person } from './entities/person.entity';
import { PersonsController } from './persons.controller';
import { PersonsService } from './persons.service';
import { Asset } from './entities/asset.entity';
import { AssetsController } from './assets.controller';
import { AssetsService } from './assets.service';
import { DoctorsController } from './doctors.controller';
import { DoctorsService } from './doctors.service';
import { Doctor } from './entities/doctor.entity';

@Module({
  imports: [
    TypeOrmModule.forFeature([
      ScreenGroup,
      Screen,
      Parameter,
      ScreenShot,
      ScreenLog,
      Person,
      Asset,
      Doctor,
    ]),
  ],
  controllers: [
    ScreensController,
    PlayerController,
    ScreenGroupsController,
    TemplatesController,
    ParametersController,
    PersonsController,
    AssetsController,
    DoctorsController,
  ],
  providers: [
    ScreensService,
    ScreenGroupsService,
    ParametersService,
    PersonsService,
    AssetsService,
    DoctorsService,
  ],
})
export class ScreensModule {}
