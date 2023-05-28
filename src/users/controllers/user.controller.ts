import { Request, Response } from 'express'
import { UpdateResult, DeleteResult } from 'typeorm'

import * as UserSrv from '../services/user.service'

export const getAllUSerController = async  (req: Request, res: Response) => {
	try {
		const user = await UserSrv.getAllUser()
		return res.json(user)
	} catch (e) {
		console.error(e)
	}
}

export const getUserByIdController = async (req: Request, res: Response) => {
	const { id } = req.params
	const idUser = Number(id)

	try {
		const user = await UserSrv.getUserById(idUser)
		return res.json(user)
	} catch(e) {
		console.error(e)
	}
}

export const getUserWithTaskController = async (req: Request, res: Response) => {
	console.log(req.userId)
	const idUser = Number(req.userId)

	try {
		const userTask = await UserSrv.getUserWithTask(idUser)
		console.log(userTask)
		return res.json(userTask)
	} catch (e) {
		return res.json(e)
	}
}


export const storeController = async  (req: Request, res: Response) => {
	try {
		const user = await UserSrv.createUser(req.body)
		return res.json(user)
	} catch (e) {
		console.error(e)
	}
}

export const updateUserController = async (req: Request, res: Response) => {
	const { id } = req.params
	const idUser = Number(id)

	try {
		const userUpdate: UpdateResult = await UserSrv.updateUser(idUser, req.body)
		if(!userUpdate.affected) return res.json({ msg: "No se pudo actualizar datos" })

		return res.json(userUpdate)
	} catch(e){
		console.error(e)
	}
}

export const deleteUserController = async (req: Request, res: Response) => {
	const { id } = req.params
	const idUser = Number(id)

	try {
		const userDelete: DeleteResult = await UserSrv.deleteUser(idUser)
		if(!userDelete.affected) return res.json({ msg: "No se pudo eliminar datos" })

		return res.json(userDelete)
	} catch(e){
		console.error(e)
	}
}