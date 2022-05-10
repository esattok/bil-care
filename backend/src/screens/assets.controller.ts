import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
  UploadedFile,
  UseGuards,
  UseInterceptors
} from '@nestjs/common';
import { JwtAuthGuard } from '../auth/jwt-auth.guard';
import { AssetsService } from './assets.service';
import { Asset } from './entities/asset.entity';
import { Roles } from '../auth/roles.decorator';
import { ASSET_TYPES, ROLES } from '../auth/constants';
import { FileInterceptor } from '@nestjs/platform-express';
import { writeFileSync } from 'fs';

@UseGuards(JwtAuthGuard)
@Controller('assets')
export class AssetsController {
  constructor(private readonly assetsService: AssetsService) {}

  @Roles(ROLES.admin)
  @Post('/upload')
  @UseInterceptors(FileInterceptor('file'))
  async upload(@UploadedFile() file: Express.Multer.File) {
    const asset = new Asset();
    let subDir = 'image';
    if (file.mimetype.startsWith('image/')) {
      asset.type = ASSET_TYPES.IMAGE;
    } else if (file.mimetype.startsWith('video/')) {
      asset.type = ASSET_TYPES.VIDEO;
      subDir = 'video';
    }
    asset.name = file.originalname;
    await this.assetsService.create(asset);

    writeFileSync(`/var/www/html/screen/${subDir}/${file.originalname}`, file.buffer);
  }

  @Roles(ROLES.admin)
  @Post()
  async create(@Body() person: Asset) {
    return this.assetsService.create(person);
  }

  @Roles(ROLES.admin, ROLES.oper, ROLES.view)
  @Get()
  async findAll() {
    return await this.assetsService.findAll();
  }

  @Roles(ROLES.admin, ROLES.oper, ROLES.view)
  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.assetsService.findOne(+id);
  }

  @Roles(ROLES.admin)
  @Patch(':id')
  update(@Param('id') id: string, @Body() asset: Asset) {
    return this.assetsService.update(+id, asset);
  }

  @Roles(ROLES.admin)
  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.assetsService.remove(+id);
  }
}
