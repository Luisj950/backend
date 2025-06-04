import { Controller, Get, Post } from '@nestjs/common';
import { Body } from '@nestjs/common/decorators/http/route-params.decorator';
import { NotificationsService } from './notifications.service';

@Controller('notifications')
export class NotificationsController {
  constructor(private readonly notificationsService: NotificationsService) {}

  @Post()
async sendNotification(@Body() body: { message: string; type: string }) {
  return this.notificationsService.sendNotification(body.type, body.message);
}


  @Get()
  async getAll() {
    return this.notificationsService.findAll();
  }
}
