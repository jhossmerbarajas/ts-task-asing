import { Request, Response } from 'express'
import * as taskSrv from '../services/task.service'

export const getAllTaskController = async (req: Request, res: Response) => {
	try {
		const task = await taskSrv.getAllTask()
		return res.json(task)
	} catch(e) {
		return res.json(e)
	}
}

export const createTaskController = async (req: Request, res: Response) => {
	try {
		const task = await taskSrv.createdTask(req.body)
		if(!task) return res.json({ msg: "No se creo la tarea" })

		return res.json(task)
	} catch (e) {
		return res.json(e)
	}
}