import {
  Body,
  Controller,
  Get,
  NotFoundException,
  Param,
  Patch,
  UseGuards,
} from '@nestjs/common';
import { readFileSync, writeFileSync, existsSync } from 'fs';
import { ScreenGroupsService } from './screen-groups.service';
import { JwtAuthGuard } from '../auth/jwt-auth.guard';
import { Roles } from '../auth/roles.decorator';
import { ROLES } from '../auth/constants';

@UseGuards(JwtAuthGuard)
@Controller('templates')
export class TemplatesController {
  constructor(private readonly screenGroupsService: ScreenGroupsService) {}

  @Roles(ROLES.admin, ROLES.oper, ROLES.view)
  @Get('template/:id')
  async getTemplate(@Param('id') id: string) {
    const group = await this.screenGroupsService.findOne(+id);
    if (!group) throw new NotFoundException('Screen Group Not Found');
    const filePath = `${process.env.TEMPLATE_DIR}/${group.code}.json`;
    if (existsSync(filePath)) {
      const templateFile = readFileSync(filePath, 'utf-8');
      return JSON.parse(templateFile);
    } else {
      return null;
    }
  }

  @Roles(ROLES.admin, ROLES.oper)
  @Patch('template/:id')
  async saveTemplate(@Param('id') id: string, @Body() template: any) {
    const group = await this.screenGroupsService.findOne(+id);
    if (!group) throw new NotFoundException('Screen Group Not Found');
    writeFileSync(
      `${process.env.TEMPLATE_DIR}/${group.code}.json`,
      JSON.stringify(template),
    );
  }
}
