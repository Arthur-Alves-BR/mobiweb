import { ApiProperty } from '@nestjs/swagger';

export class ResponseBrandDto {
  @ApiProperty()
  id: number;

  @ApiProperty()
  name: string;
}
