import { Router } from 'express'
import { deleteUser, getUser, getUserById, postUser, putUser } from '../controllers/user.js'

const routerUser = Router()

routerUser.get('/', getUser)
routerUser.get('/:id', getUserById)

routerUser.put('/:id', putUser)

routerUser.post('/', postUser)

routerUser.delete('/:id', deleteUser)

export default routerUser
