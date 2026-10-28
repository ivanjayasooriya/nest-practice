import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './users-dto/create-user.dto.js';

@Injectable()
export class UsersService {

    private users: CreateUserDto[] = [];

    findAll(): CreateUserDto[] {
        return this.users;
    }

    findOne(id: number): CreateUserDto | undefined {
        return this.users.find(user => user.id === id);
    }

    create(user: CreateUserDto): CreateUserDto {
        this.users.push(user);
        return user;
    }
}
