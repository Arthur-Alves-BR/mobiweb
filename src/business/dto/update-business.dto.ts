import { ApiProperty } from '@nestjs/swagger';
import { PartialType } from '@nestjs/mapped-types';
import { IsNotEmpty, IsString } from 'class-validator';
import { CreateBusinessDTO } from './create-business.dto';

export class UpdateBusinessDTO extends PartialType(CreateBusinessDTO) {
  @ApiProperty()
  @IsNotEmpty()
  @IsString()
  name: string;
}
