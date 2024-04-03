import { Router } from 'express'
import { login } from '../controllers/auth.js'

const routerUser = Router()

routerUser.post('/', login)

export default routerUser
