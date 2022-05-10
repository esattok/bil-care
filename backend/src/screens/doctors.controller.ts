import { Body, Controller, Delete, Get, Param, Patch, Post, UseGuards } from '@nestjs/common';
import { JwtAuthGuard } from '../auth/jwt-auth.guard';
import { Roles } from '../auth/roles.decorator';
import { ROLES } from '../auth/constants';
import { DoctorsService } from './doctors.service';
import { Doctor } from './entities/doctor.entity';

@UseGuards(JwtAuthGuard)
@Controller('doctors')
export class DoctorsController {
  constructor(private readonly doctorsService: DoctorsService) {}

  @Roles(ROLES.admin)
  @Post()
  async create(@Body() dto: Doctor) {
    return this.doctorsService.create(dto);
  }

  @Roles(ROLES.admin, ROLES.oper, ROLES.view)
  @Get()
  async findAll() {
    const persons = await this.doctorsService.findAll();
    return persons;
  }

  @Roles(ROLES.admin, ROLES.oper, ROLES.view)
  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.doctorsService.findOne(+id);
  }

  @Roles(ROLES.admin)
  @Patch(':id')
  update(@Param('id') id: string, @Body() dto: Doctor) {
    return this.doctorsService.update(+id, dto);
  }

  @Roles(ROLES.admin)
  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.doctorsService.remove(+id);
  }
}
