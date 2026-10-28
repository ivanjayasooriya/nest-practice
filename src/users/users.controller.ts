import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { UsersService } from './users.service.js';
import { CreateUserDto } from './users-dto/create-user.dto.js';

@Controller('users')
export class UsersController {

    constructor(
        private readonly usersService: UsersService // Dependency injection
    ) {}

    @Get()
    findAll(): CreateUserDto[] {
        return this.usersService.findAll();
    }

    @Get(':id')
    findOne(@Param('id') id: string): CreateUserDto | undefined {
        return this.usersService.findOne(+id);
    }

    @Post()
    create(@Body() createUserDto: CreateUserDto): CreateUserDto {
        return this.usersService.create(createUserDto);
    }
}
