import { Request, Response } from 'express'

export const getAllUSer = async  (req: Request, res: Response) => {
	try {
		return res.json({ msg: "hola desde controller" })
	} catch (e) {
		console.error(e)
	}
}