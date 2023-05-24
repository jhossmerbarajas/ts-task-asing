import { IsNotEmpty } from 'class-validator'
import { BaseDTO } from '../../config/base.dto'

import { UserEntity } from '../../users/entities/user.entity'

export class TaskDTO extends BaseDTO
{	
	@IsNotEmpty()
	name!: string

	@IsNotEmpty()
	description!: string

	@IsNotEmpty()
	check!: boolean
	
	@IsNotEmpty()
	user_id!: UserEntity

	@IsNotEmpty()
	user_asing!: UserEntity
}