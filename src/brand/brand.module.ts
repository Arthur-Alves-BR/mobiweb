import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { BrandService } from './brand.service';
import { Brand } from './entities/brand.entity';
import { BrandController } from './brand.controller';

@Module({
  providers: [BrandService],
  controllers: [BrandController],
  imports: [TypeOrmModule.forFeature([Brand])],
})
export class BrandModule {}
