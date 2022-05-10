import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ScreensModule } from './screens/screens.module';
import { Screen } from './screens/entities/screen.entity';
import { ScreenGroup } from './screens/entities/screen-group.entity';
import { Parameter } from './screens/entities/parameter.entity';
import { ScreenShot } from './screens/entities/screen-shot.entity';
import { ScreenLog } from './screens/entities/screen-log.entity';
import { AuthModule } from './auth/auth.module';
import { UsersModule } from './users/users.module';
import { Person } from './screens/entities/person.entity';
import { Asset } from './screens/entities/asset.entity';
import { Doctor } from './screens/entities/doctor.entity';

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true }),
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'postgres',
      password: '01110011',
      database: 'dev',
      entities: [
        Screen,
        ScreenGroup,
        Parameter,
        ScreenShot,
        ScreenLog,
        Person,
        Asset,
        Doctor,
      ],
      synchronize: false,
    }),
    ScreensModule,
    AuthModule,
    UsersModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
