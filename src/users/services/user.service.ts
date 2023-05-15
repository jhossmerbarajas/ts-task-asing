import { UpdateResult, DeleteResult } from 'typeorm'
import { AppDataSource } from '../../config/data-source'
import { UserEntity } from '../entities/user.entity'
import { UserDTO } from '../dto/user.dto'
import bcrypt from 'bcrypt'


export const getAllUser = async (): Promise<UserEntity[]> => {
	return await AppDataSource.getRepository(UserEntity).find()
}

export const getUserById = async (id: number): Promise<UserEntity | null> => {
	return await AppDataSource
					.getRepository(UserEntity)
					.findOneBy({ id })
}

export const getUserByUsername = async (username: string): Promise<UserEntity | null> => {
	return await AppDataSource
					.getRepository(UserEntity)
					.createQueryBuilder('user')
					.where({ username })
					.getOne()
}

export const createUser = async (data: UserDTO): Promise<UserEntity> => {
	const repository = AppDataSource.getRepository(UserEntity)
	const newUser = await repository.create(data)
	const hash = await bcrypt.hash(newUser.password, 10)
	newUser.password = hash
	
	const userSave = await repository.save(newUser)

	return userSave
}

export const updateUser = async (id: number, data: UserDTO): Promise<UpdateResult> => {
	return await AppDataSource
					.getRepository(UserEntity)
					.update(id, data)
}

export const deleteUser = async (id: number): Promise<DeleteResult> => {
	return await AppDataSource
					.getRepository(UserEntity)
					.delete(id)
}