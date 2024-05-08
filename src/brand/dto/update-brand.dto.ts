import { ApiProperty } from '@nestjs/swagger';
import { PartialType } from '@nestjs/mapped-types';
import { CreateBrandDTO } from './create-brand.dto';

export class UpdateBrandDTO extends PartialType(CreateBrandDTO) {
  @ApiProperty()
  name?: string;

  @ApiProperty()
  businessId?: number;
}
