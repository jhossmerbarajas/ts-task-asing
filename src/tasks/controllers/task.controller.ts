import { Request, Response } from 'express'
import { TaskEntity } from '../entities/task.entity'
import * as taskSrv from '../services/task.service'

export const getAllTaskController = async (req: Request, res: Response) => {
	try {
		const task = await taskSrv.getAllTask()
		return res.json(task)
	} catch(e) {
		return res.json(e)
	}
}

export const getAllTaskWithUserController = async (re: Request, res: Response) => {
	try {
		const taskUSer = await taskSrv.getAllTaskWithUser()
		return res.json(taskUSer)
	} catch(e) {
		return res.json(e)
	}
}

export const getTaskWithUserController = async (req: Request, res: Response) => {
	const { id } = req.params
	const idTask = Number(id)
	
	try {
		const task = await taskSrv.getTaskWithUser(idTask)
		return res.json(task)
	} catch (e) {
		return res.json(e)
	}
}

export const createTaskController = async (req: Request, res: Response) => {
	try {
				
		// console.log(req.body)
		const task = await taskSrv.createdTask(req.userId, req.body) 
		if(!task) return res.json({ msg: "No se creo la tarea" })
		
		return res.json(task)
	} catch (e) {
		return res.json(e)
	}
}