import { Repository } from 'typeorm';
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Business } from './entities/business.entity';
import { CreateBusinessDto } from './dto/create-business.dto';
import { UpdateBusinessDto } from './dto/update-business.dto';

@Injectable()
export class BusinessService {
  constructor(
    @InjectRepository(Business)
    private businessRepository: Repository<Business>,
  ) {}

  async create(data: CreateBusinessDto): Promise<Business> {
    return this.businessRepository.save(data);
  }

  async findAll(): Promise<Business[]> {
    return this.businessRepository.find({ relations: ['brands'] });
  }

  async findOne(id: number): Promise<Business | null> {
    const data = await this.businessRepository.find({
      where: { id },
      relations: ['brands'],
    });
    return data[0];
  }

  async update(id: number, data: UpdateBusinessDto): Promise<Business> {
    await this.businessRepository.update(id, data);
    return this.findOne(id);
  }

  async remove(id: number): Promise<void> {
    await this.businessRepository.delete(id);
  }
}
