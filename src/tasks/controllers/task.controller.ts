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

export const getTaskWithUserController = async (req: Request, res: Response) => {
	
	const idTask = Number(req.userId)
	
	try {
		const task = await taskSrv.getTaskWithUser(idTask)
		return res.json(task)
	} catch (e) {
		return res.json(e)
	}
}

export const getTaskWithTrueController = async (req: Request, res: Response) => {
	try {
		const task = await taskSrv.getTaskWithTrue()
		return res.json(task)
	} catch (e) {
		return res.json(e)
	}
}

export const getTaskWithFalseController = async (req: Request, res: Response) => {
	try {
		const task = await taskSrv.getTaskWithFalse()
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

export const updateTaskController = async (req: Request, res: Response) => {
	const { id } = req.params
	const idTask = Number(id)
	
	try {
		const taskUpdate = await taskSrv.updatedTask(idTask, req.body.status)
		return res.json(taskUpdate)
	} catch(e) {
		console.error(e)
	}
}