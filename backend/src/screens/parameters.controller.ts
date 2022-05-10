import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete, UseGuards
} from '@nestjs/common';
import { ParametersService } from './parameters.service';
import { Parameter } from './entities/parameter.entity';
import { JwtAuthGuard } from '../auth/jwt-auth.guard';
import { Roles } from '../auth/roles.decorator';
import { ROLES } from '../auth/constants';

@UseGuards(JwtAuthGuard)
@Controller('parameters')
export class ParametersController {
  constructor(private readonly parametersService: ParametersService) {}

  @Roles(ROLES.admin)
  @Post()
  create(@Body() parameter: Parameter) {
    return this.parametersService.create(parameter);
  }

  @Roles(ROLES.admin, ROLES.oper, ROLES.view)
  @Get()
  findAll() {
    return this.parametersService.findAll();
  }

  @Roles(ROLES.admin, ROLES.oper, ROLES.view)
  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.parametersService.findOne(+id);
  }

  @Roles(ROLES.admin)
  @Patch(':id')
  update(@Param('id') id: string, @Body() parameter: Parameter) {
    return this.parametersService.update(+id, parameter);
  }

  @Roles(ROLES.admin)
  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.parametersService.remove(+id);
  }
}
