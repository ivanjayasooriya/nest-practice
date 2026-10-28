import {
  Body,
  Controller,
  Get,
  Param,
  ParseIntPipe,
  Post,
} from '@nestjs/common';
import { UsersService } from './users.service.js';
import { CreateUserDto } from './users-dto/create-user.dto.js';

@Controller('users')
export class UsersController {
  constructor(
    private readonly usersService: UsersService, // Dependency injection
  ) {}

  @Get()
  findAll(): CreateUserDto[] {
    return this.usersService.findAll();
  }

  @Get(':id')
  // ParseIntPipe is used to automatically convert the id parameter from a string to a number. If the conversion fails, it will throw an error.
  findOne(@Param('id', ParseIntPipe) id: number): CreateUserDto | undefined {
    return this.usersService.findOne(id);
  }

  @Post()
  create(@Body() createUserDto: CreateUserDto): CreateUserDto {
    return this.usersService.create(createUserDto);
  }
}
