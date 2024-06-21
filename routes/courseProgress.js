import { Router } from 'express'
import { deleteCourseProgress, getCourseProgress, getCourseProgressByPurchasedCourseId, postCourseProgress, putCourseProgress } from '../controllers/curseProgress.js'
import { verifyJWT } from '../helpers/JWT.js'

const routerUser = Router()

// routerUser.get('/', [verifyJWT], getCourseProgress)
routerUser.get('/', getCourseProgress)
// routerUser.get('/:id', [verifyJWT], getCourseProgressByPurchasedCourseId)
routerUser.get('/:id', getCourseProgressByPurchasedCourseId)

// routerUser.put('/:id', [verifyJWT], putCourseProgress)
routerUser.put('/:id', putCourseProgress)

// routerUser.post('/', [verifyJWT], postCourseProgress)
routerUser.post('/', postCourseProgress)

// routerUser.delete('/:id', [verifyJWT], deleteCourseProgress)
routerUser.delete('/:id', deleteCourseProgress)


export default routerUser
