import { Brand } from './../../brand/entities/brand.entity';
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Business {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @OneToMany(() => Brand, (brand) => brand.business)
  brands: Brand[];
}
