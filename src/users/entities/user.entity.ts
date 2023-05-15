import { Entity, Column } from 'typeorm'
import { BaseEntity } from '../../config/base.entity'
import { RoleType } from '../dto/user.dto'

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

}