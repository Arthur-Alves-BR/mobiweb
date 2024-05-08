import {
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  Controller,
} from '@nestjs/common';

import { BusinessService } from './business.service';
import { Business } from './entities/business.entity';
import { ApiOkResponse, ApiTags } from '@nestjs/swagger';
import { CreateBusinessDTO } from './dto/create-business.dto';
import { UpdateBusinessDTO } from './dto/update-business.dto';
import { ResponseBusinessDTO } from './dto/response-business.dto';

@ApiTags('Business')
@Controller('business')
export class BusinessController {
  constructor(private readonly businessService: BusinessService) {}

  @Post()
  create(@Body() createBusinessDto: CreateBusinessDTO): Promise<Business> {
    return this.businessService.create(createBusinessDto);
  }

  @Get()
  @ApiOkResponse({
    type: [ResponseBusinessDTO],
  })
  findAll(): Promise<Business[]> {
    return this.businessService.findAll();
  }

  @Get(':id')
  @ApiOkResponse({
    type: ResponseBusinessDTO,
  })
  findOne(@Param('id') id: number): Promise<Business> {
    return this.businessService.findOne(+id);
  }

  @Patch(':id')
  update(
    @Param('id') id: number,
    @Body() updateBusinessDto: UpdateBusinessDTO,
  ): Promise<Business> {
    return this.businessService.update(+id, updateBusinessDto);
  }

  @Delete(':id')
  remove(@Param('id') id: number): Promise<void> {
    return this.businessService.remove(+id);
  }
}
