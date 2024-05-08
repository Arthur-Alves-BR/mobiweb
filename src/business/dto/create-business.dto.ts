import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty } from 'class-validator';

export class CreateBusinessDTO {
  @ApiProperty()
  @IsNotEmpty()
  name: string;
}
