import 'reflect-metadata'
import { config } from 'dotenv'
config() 

import { AppServer } from './app'
import { AppDataSource } from './config/data-source'

const bootstrap = async () => {
	try {
		await AppDataSource.initialize()
		const app = new AppServer()
		app.listen()
	} catch (e) {
		console.error(e)
	}
}

bootstrap()