import { ApiProperty } from '@nestjs/swagger';
import { ResponseBrandDto } from 'src/brand/dto/response-brand.dto';

export class ResponseBusinessDto {
  @ApiProperty()
  id: number;

  @ApiProperty()
  name: string;

  @ApiProperty()
  brands: ResponseBrandDto[];
}
