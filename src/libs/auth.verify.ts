import { Request, Response, NextFunction } from 'express'
import * as UserSrv from '../users/services/user.service'

export const isAdmin = async (req: Request, res: Response, next: NextFunction) => {
	try {
		const user = await UserSrv.getUserById(req.userId)
		if(!user) return res.json({ msg: "no se encontró usuario" })

		if(user.role === "ADMIN") {
			next()
			return
		}

		return res.json({ msg: "requiere ser administrador" })

	} catch (e) {
		return res.json(e)
	}
}