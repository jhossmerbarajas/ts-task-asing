import { Entity, Column } from 'typeorm'
import { BaseEntity } from '../../config/base.entity'

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
}