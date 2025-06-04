import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Notification } from './notification.entity';

import { NotificationContext } from './notification-context';
import { EmailNotification } from './email-notification.strategy';
import { SMSNotification } from './sms-notification.strategy';
import { PushNotification } from './push-notification.strategy';

@Injectable()
export class NotificationsService {
  constructor(
    @InjectRepository(Notification)
    private readonly notificationRepository: Repository<Notification>,
  ) {}

  async sendNotification(type: string, message: string) {
    const context = new NotificationContext();
    

    switch (type) {
      case 'email':
        context.setStrategy(new EmailNotification());
        break;
      case 'sms':
        context.setStrategy(new SMSNotification());
        break;
      case 'push':
       context.setStrategy(new PushNotification());
        break;
      default:
        throw new Error('Tipo de notificación no válido');
    }

    // Ejecuta la estrategia (puede ser envío real o solo un console.log)
    context.executeStrategy(message);

    // Guarda la notificación en la base de datos
    const notification = this.notificationRepository.create({ message, type });
    return this.notificationRepository.save(notification);
  }

  // Método adicional para consultar todas las notificaciones
  async findAll() {
    return this.notificationRepository.find();
  }
}
