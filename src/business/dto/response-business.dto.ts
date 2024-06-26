import { ApiProperty } from '@nestjs/swagger';
import { ResponseBrandDTO } from './../../brand/dto/response-brand.dto';

export class ResponseBusinessDTO {
  @ApiProperty()
  id: number;

  @ApiProperty()
  name: string;

  @ApiProperty({ type: () => [ResponseBrandDTO] })
  brands: ResponseBrandDTO[];
}
