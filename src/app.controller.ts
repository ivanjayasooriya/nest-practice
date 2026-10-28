import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { AppService } from './app.service.js';
import { CreateAppDto } from './app-dto/create-app.dto.js';
import { UpdateAppDto } from './app-dto/update-app.dto.js';

@Controller('app')
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Get(':id')
  getHelloById(@Param('id') id: string): string {
    return this.appService.getHelloById(id);
  }

  @Post()
  createHello(@Body() body: CreateAppDto): CreateAppDto {
    return this.appService.createHello(body);
  }

  @Put(':id')
  updateHello(@Param('id') id: string, @Body() body: UpdateAppDto): UpdateAppDto {
    return this.appService.updateHello(id, body);
  }

  @Delete(':id')
  deleteHello(@Param('id') id: string): any {
    return `Hello World with ID: ${id} has been deleted`;
  }
}
