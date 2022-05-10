import { Module } from '@nestjs/common';
import { UsersService } from './users.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Person } from '../screens/entities/person.entity';

@Module({
  imports: [
    TypeOrmModule.forFeature([
      Person,
    ]),
  ],
  providers: [UsersService],
  exports: [UsersService],
})
export class UsersModule {}
