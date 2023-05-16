import { Router } from 'express'
const router: Router = Router()

// Controllers
import * as UserCntl from '../users/controllers/user.controller'
import * as AuthCntl from '../auth/controllers/auth.controller'
import * as TaskCntl from '../tasks/controllers/task.controller'

// Middleware Token
import { verifyToken } from '../libs/verify.token'
import * as authVerify from '../libs/auth.verify'

/* Routes the Users */
router.get('/users', 
	UserCntl.getAllUSer)

router.get('/users/:id', 
	[verifyToken, authVerify.isAdmin],
	UserCntl.getUserById)

router.post('/users', 
	[verifyToken, authVerify.isAdmin],
	UserCntl.store)

router.put('/users/:id', 
	[verifyToken, authVerify.isAdmin, authVerify.isUser],
	UserCntl.updateUser)

router.delete('/users/:id', 
	[verifyToken, authVerify.isAdmin], 
	UserCntl.deleteUser)


// Auth
router.post('/auth', AuthCntl.login)


// Task
router.get('/task', TaskCntl.getAllTaskController)
router.post('/tasks', TaskCntl.createTaskController)

export default router