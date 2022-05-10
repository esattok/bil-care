import { Column, Entity } from 'typeorm';
import { BaseEntity } from './base.entity';

@Entity()
export class ScreenGroup extends BaseEntity {
  constructor(id) {
    super();
    this.id = id;
  }

  @Column()
  code: string;

  @Column()
  name: string;
}
