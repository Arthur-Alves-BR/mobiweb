import { Repository } from 'typeorm';
import { Injectable } from '@nestjs/common';
import { Brand } from './entities/brand.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { CreateBrandDto } from './dto/create-brand.dto';
import { UpdateBrandDto } from './dto/update-brand.dto';

@Injectable()
export class BrandService {
  constructor(
    @InjectRepository(Brand)
    private brandRepository: Repository<Brand>,
  ) {}

  async create(data: CreateBrandDto) {
    return this.brandRepository.save(data);
  }

  async findAll() {
    return this.brandRepository.find();
  }

  async findOne(id: number) {
    return this.brandRepository.findOneBy({ id });
  }

  async update(id: number, data: UpdateBrandDto) {
    await this.brandRepository.update(id, data);
    return this.findOne(id);
  }

  async remove(id: number) {
    await this.brandRepository.delete(id);
  }
}
