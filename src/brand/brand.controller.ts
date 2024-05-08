import {
  Get,
  Post,
  Body,
  Patch,
  Param,
  Query,
  Delete,
  Controller,
} from '@nestjs/common';

import { BrandService } from './brand.service';
import { Brand } from './entities/brand.entity';
import { CreateBrandDTO } from './dto/create-brand.dto';
import { UpdateBrandDTO } from './dto/update-brand.dto';
import { ResponseBrandDTO } from './dto/response-brand.dto';
import { ApiOkResponse, ApiQuery, ApiTags } from '@nestjs/swagger';

@ApiTags('Brands')
@Controller('brands')
export class BrandController {
  constructor(private readonly brandService: BrandService) {}

  @Post()
  create(@Body() createBrandDto: CreateBrandDTO): Promise<Brand> {
    return this.brandService.create(createBrandDto);
  }

  @Get()
  @ApiOkResponse({
    type: [ResponseBrandDTO],
  })
  @ApiQuery({ name: 'business', required: false })
  findAll(@Query('business') businessId: number): Promise<Brand[]> {
    return this.brandService.findByBusiness(businessId);
  }

  @Get(':id')
  @ApiOkResponse({
    type: ResponseBrandDTO,
  })
  findOne(@Param('id') id: string): Promise<Brand> {
    return this.brandService.findOne(+id);
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateBrandDto: UpdateBrandDTO,
  ): Promise<Brand> {
    return this.brandService.update(+id, updateBrandDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string): Promise<void> {
    return this.brandService.remove(+id);
  }
}
