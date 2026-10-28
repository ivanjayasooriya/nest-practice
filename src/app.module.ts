import { MiddlewareConsumer, Module, NestModule } from '@nestjs/common';
import { AppController } from './app.controller.js';
import { AppService } from './app.service.js';
import { UsersModule } from './users/users.module.js';
import { logger } from './common/middleware/logger.middleware.js';
import { ItemsModule } from './items/items.module.js';

@Module({
  imports: [UsersModule, ItemsModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer) { // Implementing NestModule to configure middleware 
    consumer
      .apply(logger)
      .forRoutes('*');
  }
}
