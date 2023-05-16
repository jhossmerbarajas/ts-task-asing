import { AppDataSource } from '../../config/data-source'
import { TaskEntity } from '../entities/task.entity'
import { TaskDTO } from '../dto/task.dto'

export const getAllTask = async (): Promise<TaskEntity[]> => {
	return await AppDataSource.getRepository(TaskEntity).find()
}

export const createdTask = async (data: TaskDTO): Promise<TaskEntity> => {
	const repository = AppDataSource.getRepository(TaskEntity)
	const task = await repository.create(data)
	const newTask = await repository.save(task)

	return newTask
} 