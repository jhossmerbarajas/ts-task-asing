import { Entity, Column, ManyToOne, JoinColumn } from 'typeorm'
import { BaseEntity } from '../../config/base.entity'

import { UserEntity } from '../../users/entities/user.entity'

@Entity({ name: "task" })
export class TaskEntity extends BaseEntity
{
	@Column({
		length: 50,
		nullable: false
	})
	name!: string

	@Column({ nullable: false })
	description!: string

	@Column({
		type: "boolean",
		default: false
	})
	check!: boolean

	// Usuario a quien le asignan la tarea
	@ManyToOne( () => UserEntity, (user) => user.tasks )
	@JoinColumn({ name: "user_id" })
	user_id!: UserEntity

	//Usuario (admin) quien asigna la tarea
	@ManyToOne( () => UserEntity, (user_asing) => user_asing.task_asing )
	@JoinColumn({ name: "user_asing" })
	user_asing!: UserEntity
}