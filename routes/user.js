import { Router } from 'express'
import { deleteUser, getUser, getUserById, postUser, putUser } from '../controllers/user.js'
import { verifyJWT } from '../helpers/JWT.js'

const routerUser = Router()

routerUser.get('/', [verifyJWT], getUser)
routerUser.get('/:id', [verifyJWT], getUserById)

routerUser.put('/:id', [verifyJWT], putUser)

routerUser.post('/', [verifyJWT], postUser)

routerUser.delete('/:id', [verifyJWT], deleteUser)

export default routerUser
