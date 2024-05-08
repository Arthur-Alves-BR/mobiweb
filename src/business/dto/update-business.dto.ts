import { IsNotEmpty } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';
import { PartialType } from '@nestjs/mapped-types';
import { CreateBusinessDto } from './create-business.dto';

export class UpdateBusinessDto extends PartialType(CreateBusinessDto) {
  @ApiProperty()
  @IsNotEmpty()
  name: string;
}
