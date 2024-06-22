import { BaseEntity, Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity({ name: "tracker" })
export class TrackerEntity extends BaseEntity {
  constructor() {
    super();
  }

  @PrimaryGeneratedColumn()
  id!: number;

  @Column({ name: 'project' })
  project?: string;

  @Column({ name: 'description' })
  description?: string;

  @Column({ name: 'time' })
  time?: number;
}
