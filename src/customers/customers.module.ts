import { Module } from '@nestjs/common';
import { CustomersService } from './customers.service.js';
import { CustomersResolver } from './customers.resolver.js';

@Module({
  providers: [CustomersResolver, CustomersService],
})
export class CustomersModule {}
