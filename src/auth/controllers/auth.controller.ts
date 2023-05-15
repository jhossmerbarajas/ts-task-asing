import { Request, Response } from 'express'
import { getUserByUsername } from '../../users/services/user.service'
import bcrypt from 'bcrypt'
import * as jwt from 'jsonwebtoken'


export const login = async (req: Request, res: Response) => {
	try {
		const user = await getUserByUsername(req.body.username)
		if(!user) return res.json({ msg: "no se encontró el usuario" })

		const passCompare = await bcrypt.compare(req.body.password, user.password)
		if(!passCompare) return res.json({ msg: "Contraseña incorrecta" })

		const token: string = jwt.sign({id: user.id}, process.env.TOKEN_SECRET || "jhossweb")

		return res.header("auth-token", token).json(user)
	} catch (e) {
		console.error(e)
	}
}