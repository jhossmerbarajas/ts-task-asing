import { AppDataSource } from '../../config/data-source'
import { TaskEntity } from '../entities/task.entity'
import { TaskDTO } from '../dto/task.dto'

import { UserEntity } from '../../users/entities/user.entity'
import { getUserById } from '../../users/services/user.service'

export const getAllTask = async (): Promise<TaskEntity[]> => {
	return await AppDataSource.getRepository(TaskEntity).find()
}

export const getAllTaskWithUser = async (): Promise<TaskEntity[]> => {
	return await AppDataSource.getRepository(TaskEntity)
					.createQueryBuilder('task')
					.leftJoinAndSelect('task.user', 'user')
					.getMany()
}

export const getTaskWithUser = async (id: number): Promise<TaskEntity | null> => {
	return await AppDataSource.getRepository(TaskEntity)
					.createQueryBuilder('task')
					.leftJoinAndSelect('task.user', 'user')
					.where({ id })
					.getOne()
}

export const createdTask = async (user_asing:number, data: TaskDTO): Promise<TaskEntity> => {
	const id = Number(data.user_id)
	
	const repository = AppDataSource.getRepository(TaskEntity)
	const task = await repository.create(data)
	
	const idUser = await getUserById(id)
	task.user_id = idUser as UserEntity

	const idUserAsing = await getUserById(user_asing)
	task.user_asing = idUserAsing as UserEntity
	console.log(task)
	
	
	return await repository.save(task)
} 