import { ApiProperty } from '@nestjs/swagger';
import { PartialType } from '@nestjs/mapped-types';
import { CreateBrandDTO } from './create-brand.dto';
import { IsPositive, IsString } from 'class-validator';

export class UpdateBrandDTO extends PartialType(CreateBrandDTO) {
  @ApiProperty()
  @IsString()
  name?: string;

  @ApiProperty()
  @IsPositive()
  businessId?: number;
}
