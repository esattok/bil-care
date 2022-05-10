import { Body, Controller, Delete, Get, Param, Patch, Post, Query, Request, UseGuards } from '@nestjs/common';
import { ScreensService } from './screens.service';
import { Screen } from './entities/screen.entity';
import { JwtAuthGuard } from '../auth/jwt-auth.guard';
import { Roles } from '../auth/roles.decorator';
import { ROLES } from '../auth/constants';

@UseGuards(JwtAuthGuard)
@Controller('screens')
export class ScreensController {
  constructor(private readonly screensService: ScreensService) {}

  @Roles(ROLES.admin, ROLES.oper)
  @Post()
  create(@Body() screen: Screen) {
    return this.screensService.create(screen);
  }

  @Roles(ROLES.admin, ROLES.oper, ROLES.view)
  @Get()
  findAll(@Request() req) {
    return this.screensService.findAll();
  }

  @Roles(ROLES.admin, ROLES.oper, ROLES.view)
  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.screensService.findOne(+id);
  }

  @Roles(ROLES.admin, ROLES.oper)
  @Patch(':id')
  update(@Param('id') id: string, @Body() screen: Screen) {
    return this.screensService.update(+id, screen);
  }

  @Roles(ROLES.admin, ROLES.oper)
  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.screensService.remove(+id);
  }

  @Roles(ROLES.admin, ROLES.oper, ROLES.view)
  @Get('shots/all')
  findScreenShots(@Query() query) {
    return this.screensService.findScreenShots(query);
  }

  @Roles(ROLES.admin, ROLES.oper, ROLES.view)
  @Get('logs/all')
  findScreenLogs(@Query() query) {
    return this.screensService.findScreenLogs(query);
  }
}
