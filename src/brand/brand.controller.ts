import {
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  Controller,
  Query,
} from '@nestjs/common';

import { BrandService } from './brand.service';
import { Brand } from './entities/brand.entity';
import { CreateBrandDto } from './dto/create-brand.dto';
import { UpdateBrandDto } from './dto/update-brand.dto';

@Controller('brands')
export class BrandController {
  constructor(private readonly brandService: BrandService) {}

  @Post()
  create(@Body() createBrandDto: CreateBrandDto): Promise<Brand> {
    return this.brandService.create(createBrandDto);
  }

  @Get()
  findByBusiness(@Query('business') businessId: number): Promise<Brand[]> {
    return this.brandService.findByBusiness(businessId);
  }

  @Get(':id')
  findOne(@Param('id') id: string): Promise<Brand> {
    return this.brandService.findOne(+id);
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateBrandDto: UpdateBrandDto,
  ): Promise<Brand> {
    return this.brandService.update(+id, updateBrandDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string): Promise<void> {
    return this.brandService.remove(+id);
  }
}
