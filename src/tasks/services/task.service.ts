import { UpdateResult } from 'typeorm'
import { AppDataSource } from '../../config/data-source'
import { TaskEntity } from '../entities/task.entity'
import { TaskDTO } from '../dto/task.dto'


import { UserEntity } from '../../users/entities/user.entity'
import { getUserById } from '../../users/services/user.service'


export const getAllTask = async (): Promise<TaskEntity[]> => {
	return await AppDataSource.getRepository(TaskEntity).find()
}


export const getTaskWithUser = async (id: number): Promise<TaskEntity[]> => {
	return await AppDataSource.getRepository(TaskEntity)
					.createQueryBuilder('task')
					.leftJoinAndSelect('task.user_id', 'user')
					.where({ id })
					.getMany()
}

export const getTaskWithTrue =  async (): Promise<TaskEntity[]> => {
	return await AppDataSource.getRepository(TaskEntity).find({ where: { status: true } })
}

export const getTaskWithFalse =  async (): Promise<TaskEntity[]> => {
	return await AppDataSource.getRepository(TaskEntity).find({ where: { status: false } })
}

export const createdTask = async (user_asing:number, data: TaskDTO): Promise<TaskEntity> => {
	const id = Number(data.user_id)
	
	const repository = AppDataSource.getRepository(TaskEntity)
	const task = await repository.create(data)
	
	const idUser = await getUserById(id)
	task.user_id = idUser as UserEntity

	const idUserAsing = await getUserById(user_asing)
	task.user_asing = idUserAsing as UserEntity
	
	
	return await repository.save(task)
} 

export const updatedTask = async (id: number, status: boolean): Promise<UpdateResult> => {
	return await AppDataSource.getRepository(TaskEntity)
							.createQueryBuilder()
							.update(TaskEntity)
							.set({ status })
							.where({ id })
							.execute()							
}