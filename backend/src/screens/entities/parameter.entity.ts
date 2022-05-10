import { Column, Entity } from 'typeorm';
import { BaseEntity } from './base.entity';

@Entity()
export class Parameter extends BaseEntity {
  @Column()
  code: string;

  @Column()
  name: string;

  @Column()
  value: string;
}
