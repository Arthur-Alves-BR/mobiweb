import { Business } from './../../business/entities/business.entity';
import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Brand {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @ManyToOne(() => Business, (business) => business.brands, {
    onDelete: 'CASCADE',
    nullable: false,
  })
  business: Business;
}
