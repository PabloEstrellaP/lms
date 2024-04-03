import { Router } from 'express'
import { deleteCourseProgress, getCourseProgress, getCourseProgressByPurchasedCourseId, postCourseProgress, putCourseProgress } from '../controllers/curseProgress.js'
import { verifyJWT } from '../helpers/JWT.js'

const routerUser = Router()

routerUser.get('/', [verifyJWT], getCourseProgress)
routerUser.get('/:id', [verifyJWT], getCourseProgressByPurchasedCourseId)

routerUser.put('/:id', [verifyJWT], putCourseProgress)

routerUser.post('/', [verifyJWT], postCourseProgress)

routerUser.delete('/:id', [verifyJWT], deleteCourseProgress)

export default routerUser
