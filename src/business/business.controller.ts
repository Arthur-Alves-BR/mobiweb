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
import { CreateBusinessDto } from './dto/create-business.dto';
import { UpdateBusinessDto } from './dto/update-business.dto';
import { ResponseBusinessDto } from './dto/response-business.dto';

@ApiTags('Business')
@Controller('business')
export class BusinessController {
  constructor(private readonly businessService: BusinessService) {}

  @Post()
  create(@Body() createBusinessDto: CreateBusinessDto): Promise<Business> {
    return this.businessService.create(createBusinessDto);
  }

  @Get()
  @ApiOkResponse({
    type: [ResponseBusinessDto],
  })
  findAll(): Promise<Business[]> {
    return this.businessService.findAll();
  }

  @Get(':id')
  @ApiOkResponse({
    type: ResponseBusinessDto,
  })
  findOne(@Param('id') id: string): Promise<Business> {
    return this.businessService.findOne(+id);
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateBusinessDto: UpdateBusinessDto,
  ): Promise<Business> {
    return this.businessService.update(+id, updateBusinessDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string): Promise<void> {
    return this.businessService.remove(+id);
  }
}
