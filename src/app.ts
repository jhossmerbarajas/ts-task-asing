import express from 'express'
import morgan from 'morgan'

//Routes
import router  from './routes/all.router'

export class AppServer
{
	private app: express.Application
	private port: number = Number(process.env.PORT)

	constructor() {
		this.app = express()
		this.middlewares()
		this.routes()
	}

	private middlewares () {
		this.app.use(express.json())
		this.app.use(morgan('dev'))
	}

	private routes() {
		this.app.use('/api', router)
	}

	listen() {
		this.app.listen(this.port)
		console.log(`Server on port ${this.port}`)
	}
}