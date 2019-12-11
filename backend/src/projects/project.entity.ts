import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity('projects')
export class Project {
  @PrimaryGeneratedColumn()
  id: string;

  @Column('text')
  owner: string;

  @Column('text')
  name: string;

  @Column('text')
  url: string;

  @Column({ type: 'int', name: 'stargazers_count' })
  stargazersCount: number;

  @Column({ type: 'int', name: 'forks_count' })
  forksCount: number;

  @Column({ type: 'timestamptz', name: 'created_at' })
  createdAt: string;

  @Column({ type: 'bigint', name: 'creator_id' })
  creatorId: string;
}
