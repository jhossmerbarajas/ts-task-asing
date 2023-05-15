import {IsNotEmpty} from 'class-validator'
import { BaseDTO } from '../../config/base.dto'

export class UserDTO extends BaseDTO
{
	@IsNotEmpty()
	name!: string

	@IsNotEmpty()
	username!: string

	@IsNotEmpty()
	password!: string
}