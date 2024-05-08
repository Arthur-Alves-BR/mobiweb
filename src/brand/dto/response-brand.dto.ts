import { ApiProperty } from '@nestjs/swagger';

export class ResponseBrandDTO {
  @ApiProperty()
  id: number;

  @ApiProperty()
  name: string;
}
