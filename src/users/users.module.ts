import { Module } from '@nestjs/common';
import { UsersController } from './users.controller.js';
import { UsersService } from './users.service.js';

@Module({
  controllers: [UsersController], // Register the UsersController to handle incoming requests related to users
  providers: [UsersService] // Register the UsersService to provide business logic and data handling for user-related operations
})
export class UsersModule {}
