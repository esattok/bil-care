import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post, Query,
  Request,
  UseGuards
} from '@nestjs/common';
import { ScreenGroup } from './entities/screen-group.entity';
import { ScreenGroupsService } from './screen-groups.service';
import { JwtAuthGuard } from '../auth/jwt-auth.guard';
import { Public } from '../auth/public.decorator';
import { Roles } from '../auth/roles.decorator';
import { ROLES } from '../auth/constants';

@UseGuards(JwtAuthGuard)
@Controller('screen-groups')
export class ScreenGroupsController {
  constructor(private readonly screenGroupsService: ScreenGroupsService) {}

  @Roles(ROLES.admin, ROLES.oper)
  @Post()
  create(@Body() group: ScreenGroup) {
    return this.screenGroupsService.create(group);
  }

  @Roles(ROLES.admin, ROLES.oper, ROLES.view)
  @Get()
  findAll(@Request() req) {
    return this.screenGroupsService.findAll();
  }

  @Roles(ROLES.admin, ROLES.oper, ROLES.view)
  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.screenGroupsService.findOne(+id);
  }

  @Roles(ROLES.admin, ROLES.oper)
  @Patch(':id')
  update(@Param('id') id: string, @Body() group: ScreenGroup) {
    return this.screenGroupsService.update(+id, group);
  }

  @Roles(ROLES.admin, ROLES.oper)
  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.screenGroupsService.remove(+id);
  }
}
