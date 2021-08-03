import {
	Entity,
	PrimaryGeneratedColumn,
	Column,
	OneToMany,
	BaseEntity,
	CreateDateColumn,
	UpdateDateColumn,
} from 'typeorm';
import { User } from '../user';

@Entity()
export class Clan extends BaseEntity {
	@PrimaryGeneratedColumn('uuid')
	id!: string;

	@Column({ type: 'varchar', length: 50, unique: true })
	name!: string;

	@Column({ type: 'boolean', default: true })
	isPublic!: boolean;

	@Column({ type: 'int' })
	maxMembers!: number;

	@Column({ type: 'int' })
	numberOfMembers!: number;

	@CreateDateColumn()
	createdAt!: Date;

	@UpdateDateColumn()
	updatedAt!: Date;

	@OneToMany(() => User, (user) => user.clan)
	members!: User[];
}
