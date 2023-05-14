import { Router } from 'express'
const router: Router = Router()

// Controllers
import * as UserCntl from '../users/controllers/user.controller'

/* Routes the Users */
router.get('/users', UserCntl.getAllUSer)

export default router