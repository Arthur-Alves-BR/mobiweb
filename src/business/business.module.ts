import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { BusinessService } from './business.service';
import { Business } from './entities/business.entity';
import { BusinessController } from './business.controller';

@Module({
  providers: [BusinessService],
  controllers: [BusinessController],
  imports: [TypeOrmModule.forFeature([Business])],
})
export class BusinessModule {}
