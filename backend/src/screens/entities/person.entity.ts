import { Column, Entity } from 'typeorm';
import { BaseEntity } from './base.entity';

@Entity()
export class Person extends BaseEntity {
  constructor() {
    super();
  }

  @Column()
  email: string;

  @Column()
  name: string;

  @Column()
  password: string;

  @Column()
  roles: string;

  updatePassword: boolean;
}
