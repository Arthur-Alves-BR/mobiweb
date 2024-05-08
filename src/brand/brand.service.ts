import { Repository } from 'typeorm';
import { Injectable } from '@nestjs/common';
import { Brand } from './entities/brand.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { CreateBrandDto } from './dto/create-brand.dto';
import { UpdateBrandDto } from './dto/update-brand.dto';
import { Business } from 'src/business/entities/business.entity';

@Injectable()
export class BrandService {
  constructor(
    @InjectRepository(Brand)
    private readonly brandRepository: Repository<Brand>,
    @InjectRepository(Business)
    private readonly businessRepository: Repository<Business>,
  ) {}

  async create(data: CreateBrandDto): Promise<Brand> {
    const brand = this.brandRepository.create(data);
    brand.business = await this.businessRepository.findOneBy({
      id: data.businessId,
    });
    return this.brandRepository.save(brand);
  }

  async findAll(): Promise<Brand[]> {
    return this.brandRepository.find();
  }

  async findOne(id: number): Promise<Brand | null> {
    return this.brandRepository.findOneBy({ id });
  }

  async update(id: number, data: UpdateBrandDto): Promise<Brand> {
    await this.brandRepository.update(id, data);
    return this.findOne(id);
  }

  async remove(id: number): Promise<void> {
    await this.brandRepository.delete(id);
  }
}
