import { Router } from 'express'
const router: Router = Router()

// Controllers
import * as UserCntl from '../users/controllers/user.controller'
import * as AuthCntl from '../auth/controllers/auth.controller'

// Middleware Token
import { verifyToken } from '../libs/verify.token'

/* Routes the Users */
router.get('/users', UserCntl.getAllUSer)
router.get('/users/:id', UserCntl.getUserById)
router.post('/users', UserCntl.store)
router.put('/users/:id', UserCntl.updateUser)
router.delete('/users/:id', verifyToken, UserCntl.deleteUser)


// Auth
router.post('/auth', AuthCntl.login)

export default router