import { Request, Response, NextFunction } from 'express'
import * as jwt from 'jsonwebtoken'

import { IPayload } from './interfaces/i.payload'

export const verifyToken = (req: Request, res: Response, next: NextFunction) => {
	
	const token = req.header('auth-token')
	if(!token) return res.status(401).json("no tiene acceso")

	const payloadToken = jwt.verify(token, process.env.TOKEN_SECRET || "jhossweb") as IPayload
	req.userId = payloadToken.id

	next()
}