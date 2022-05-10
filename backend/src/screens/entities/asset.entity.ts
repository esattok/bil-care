import { Column, Entity } from 'typeorm';
import { BaseEntity } from './base.entity';

@Entity()
export class Asset extends BaseEntity {
  constructor() {
    super();
  }

  @Column()
  name: string;

  @Column()
  type: string;

  @Column()
  content: string;

  @Column({ name: 'created_at', type: 'timestamptz' })
  createdAt: Date;
}
