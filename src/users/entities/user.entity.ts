import { Entity, Column } from 'typeorm'
import { BaseEntity } from '../../config/base.entity'

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

}