import { Entity, Column, ManyToOne, JoinColumn } from 'typeorm';
import { BaseEntity } from './base.entity';
import { ScreenGroup } from './screen-group.entity';

@Entity()
export class Screen extends BaseEntity {
  @Column()
  serial: string;

  @Column()
  name: string;

  @ManyToOne((type) => ScreenGroup, { eager: true })
  @JoinColumn({ name: 'group_id' })
  group: ScreenGroup;

  @Column()
  active: boolean;

  @Column({ name: 'update_second' })
  updateSecond: number;

  @Column({ name: 'update_random' })
  updateRandom: boolean;

  @Column()
  ip: string;

  @Column()
  platform: string;

  @Column({ name: 'take_ss' })
  takeSs: boolean;

  @Column()
  shutdown: boolean;

  @Column()
  startup: boolean;

  @Column({ name: 'working_hours' })
  workingHours: string;

  @Column({ name: 'created_at', type: 'timestamptz' })
  createdAt: Date;

  @Column({ name: 'last_updated_at', type: 'timestamptz' })
  lastUpdatedAt: Date;
}
