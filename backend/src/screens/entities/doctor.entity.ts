import { Column, Entity } from 'typeorm';
import { BaseEntity } from './base.entity';

@Entity()
export class Doctor extends BaseEntity {
  constructor() {
    super();
  }

  @Column()
  name: string;
}
