import { Repository } from 'typeorm';
import { Brand } from './entities/brand.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { CreateBrandDTO } from './dto/create-brand.dto';
import { UpdateBrandDTO } from './dto/update-brand.dto';
import { BadRequestException, Injectable } from '@nestjs/common';
import { Business } from './../business/entities/business.entity';

@Injectable()
export class BrandService {
  constructor(
    @InjectRepository(Brand)
    private readonly brandRepository: Repository<Brand>,
    @InjectRepository(Business)
    private readonly businessRepository: Repository<Business>,
  ) {}

  async create(data: CreateBrandDTO): Promise<Brand> {
    const brand = this.brandRepository.create(data);
    const business = await this.businessRepository.findOneBy({
      id: data.businessId,
    });

    if (!business) {
      throw new BadRequestException('Invalid businessId');
    }

    brand.business = business;
    return this.brandRepository.save(brand);
  }

  async findAll(): Promise<Brand[]> {
    return this.brandRepository.find();
  }

  async findOne(id: number): Promise<Brand | null> {
    return this.brandRepository.findOneBy({ id });
  }

  async findByBusiness(businessId: number): Promise<Brand[]> {
    return this.brandRepository.find({
      where: {
        business: {
          id: businessId,
        },
      },
    });
  }

  async update(id: number, data: UpdateBrandDTO): Promise<Brand> {
    await this.brandRepository.update(id, data);
    return this.findOne(id);
  }

  async remove(id: number): Promise<void> {
    await this.brandRepository.delete(id);
  }
}
