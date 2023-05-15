import { Router } from 'express'
const router: Router = Router()

// Controllers
import * as UserCntl from '../users/controllers/user.controller'

/* Routes the Users */
router.get('/users', UserCntl.getAllUSer)
router.get('/users/:id', UserCntl.getUserById)
router.post('/users', UserCntl.store)
router.put('/users/:id', UserCntl.updateUser)
router.delete('/users/:id', UserCntl.deleteUser)

export default router