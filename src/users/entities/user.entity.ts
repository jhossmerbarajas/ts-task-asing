import { Entity, Column, OneToMany } from 'typeorm'
import { BaseEntity } from '../../config/base.entity'
import { RoleType } from '../dto/user.dto'

import { TaskEntity } from '../../tasks/entities/task.entity'

@Entity({ name: "user" })
export class UserEntity extends BaseEntity{

	@Column({
		length: 50,
		nullable: false,
	})
	name!: string

	@Column({
		length: 50,
		nullable: false,
		unique: true
	})
	username!: string

	@Column({
		nullable: false,
	})
	password!: string

	@Column({
		type: "enum",
		enum: RoleType,
		nullable: false
	})
	role!: RoleType 

	@OneToMany(() => TaskEntity, (task) => task.user_id)
	tasks!: TaskEntity[]

	@OneToMany(() => TaskEntity, (task_asing) => task_asing.user_asing)
	task_asing!: TaskEntity[]

}