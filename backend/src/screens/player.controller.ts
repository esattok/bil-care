import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  Request,
  Req,
  UseInterceptors,
  UploadedFile,
} from '@nestjs/common';
import { ScreensService } from './screens.service';
import { Screen } from './entities/screen.entity';
import * as requestIp from 'request-ip';
import { FileInterceptor } from '@nestjs/platform-express';

@Controller('player')
export class PlayerController {
  constructor(private readonly screensService: ScreensService) {}

  @Post('get-player-info')
  create(@Body() screen: Screen, @Req() request: Request) {
    const ip = requestIp.getClientIp(request);
    return this.screensService.getPlayerInfo(screen, ip);
  }

  @Post('upload-ss')
  @UseInterceptors(FileInterceptor('file'))
  uploadFile(@UploadedFile() file: Express.Multer.File, @Body() body) {
    return this.screensService.uploadScreenShot(
      file,
      body.serial,
      body.shotDate,
    );
  }

  @Post('save-logs')
  saveLogs(@Body() body) {
    return this.screensService.saveLogs(body.serial, body.lines);
  }
}
