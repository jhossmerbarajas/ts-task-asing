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

router.get('/usersTask/:id', 
	UserCntl.getUserWithTaskController)

router.get('/usersTasks', 
	UserCntl.getAllUserWithTaskController)

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
	TaskCntl.getAllTaskController)

router.get('/tasks/:id', 
	TaskCntl.getTaskWithUserController)

router.get('/taskUser',
	TaskCntl.getAllTaskWithUserController)

router.post('/tasks', 
	[verifyToken, authVerify.isAdmin], 
	TaskCntl.createTaskController)

export default router