import { Injectable } from '@nestjs/common';
import { AnyCaaRecord } from 'dns';
import { CreateAppDto } from './app-dto/create-app.dto.js';
import { UpdateAppDto } from './app-dto/update-app.dto.js';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello World!';
  }

  getHelloById(id: string): string {
    return `Hello World with ID: ${id}`;
  }

  createHello(body: CreateAppDto): CreateAppDto {
    return { ...body };
  }

  updateHello(id: string, body: UpdateAppDto): UpdateAppDto {
    return { ...body };
  }

  deleteHello(id: string): any {
    return `Hello World with ID: ${id} has been deleted`;
  }
}
