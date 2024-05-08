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
import { CreateBrandDto } from './dto/create-brand.dto';
import { UpdateBrandDto } from './dto/update-brand.dto';
import { ApiOkResponse, ApiQuery, ApiTags } from '@nestjs/swagger';
import { ResponseBrandDto } from './dto/response-brand.dto';

@ApiTags('Brands')
@Controller('brands')
export class BrandController {
  constructor(private readonly brandService: BrandService) {}

  @Post()
  create(@Body() createBrandDto: CreateBrandDto): Promise<Brand> {
    return this.brandService.create(createBrandDto);
  }

  @Get()
  @ApiOkResponse({
    type: [ResponseBrandDto],
  })
  @ApiQuery({ name: 'business', required: false })
  findAll(@Query('business') businessId: number): Promise<Brand[]> {
    return this.brandService.findByBusiness(businessId);
  }

  @Get(':id')
  @ApiOkResponse({
    type: ResponseBrandDto,
  })
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
