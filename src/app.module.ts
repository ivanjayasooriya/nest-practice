import { MiddlewareConsumer, Module, NestModule } from '@nestjs/common';
import { AppController } from './app.controller.js';
import { AppService } from './app.service.js';
import { UsersModule } from './users/users.module.js';
import { logger } from './common/middleware/logger.middleware.js';
import { ItemsModule } from './items/items.module.js';
import { WebsocketGateway } from './websocket/websocket.gateway.js';
import { CustomersModule } from './customers/customers.module.js';

@Module({
  imports: [UsersModule, ItemsModule, CustomersModule],
  controllers: [AppController],
  providers: [AppService, WebsocketGateway],
})
export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer) { // Implementing NestModule to configure middleware 
    consumer
      .apply(logger)
      .forRoutes('*');
  }
}
