import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty } from 'class-validator';

export class CreateBusinessDto {
  @ApiProperty()
  @IsNotEmpty()
  name: string;
}
