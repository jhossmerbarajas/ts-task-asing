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
	UserCntl.getAllUSerController)

router.get('/userTask', 
	[verifyToken, authVerify.isUser],
	UserCntl.getUserWithTaskController)

router.get('/users/:id', 
	[verifyToken, authVerify.isAdmin],
	UserCntl.getUserByIdController)

router.post('/users', 
	[verifyToken, authVerify.isAdmin],
	UserCntl.storeController)

router.put('/users/:id', 
	[verifyToken, authVerify.isAdmin, authVerify.isUser],
	UserCntl.updateUserController)

router.delete('/users/:id', 
	[verifyToken, authVerify.isAdmin], 
	UserCntl.deleteUserController)


// Auth
router.post('/auth', AuthCntl.login)


// Task
router.get('/tasks', 
	[verifyToken, authVerify.isAdmin],
	TaskCntl.getAllTaskController)

router.get('/taskUser',
	[verifyToken, authVerify.isUser],
	TaskCntl.getTaskWithUserController)

router.get('/taskTrue',
	[verifyToken, authVerify.isAdmin, authVerify.isUser],
	TaskCntl.getTaskWithTrueController)

router.get('/taskFalse',
	[verifyToken, authVerify.isAdmin, authVerify.isUser],
	TaskCntl.getTaskWithFalseController)

router.post('/tasks', 
	[verifyToken, authVerify.isAdmin], 
	TaskCntl.createTaskController)

router.patch('/tasks/:id',
	[verifyToken, authVerify.isUser],
	TaskCntl.updateTaskController)

export default router