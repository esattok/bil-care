import { Entity, Column } from 'typeorm';
import { BaseEntity } from './base.entity';

@Entity()
export class ScreenLog extends BaseEntity {
  @Column({ name: 'screen_id' })
  screenId: number;

  @Column({ name: 'log_at', type: 'timestamptz' })
  logAt: Date;

  @Column({ name: 'created_at', type: 'timestamptz' })
  createdAt: Date;

  @Column()
  name: string;
}
