import { Entity, Column, ManyToOne, JoinColumn } from 'typeorm';
import { BaseEntity } from './base.entity';
import { ScreenGroup } from './screen-group.entity';

@Entity()
export class ScreenShot extends BaseEntity {
  @Column({ name: 'screen_id' })
  screenId: number;

  @Column({ name: 'shot_at', type: 'timestamptz' })
  shotAt: Date;

  @Column({ name: 'created_at', type: 'timestamptz' })
  createdAt: Date;

  @Column({ name: 'image', type: 'bytea', nullable: false })
  image: Buffer;
}
