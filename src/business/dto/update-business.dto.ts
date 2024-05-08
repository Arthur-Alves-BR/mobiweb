import { IsNotEmpty } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';
import { PartialType } from '@nestjs/mapped-types';
import { CreateBusinessDTO } from './create-business.dto';

export class UpdateBusinessDTO extends PartialType(CreateBusinessDTO) {
  @ApiProperty()
  @IsNotEmpty()
  name: string;
}
