import { Router } from 'express'
import { deleteCourseProgress, getCourseProgress, getCourseProgressByPurchasedCourseId, postCourseProgress, putCourseProgress } from '../controllers/curseProgress.js'

const routerUser = Router()

routerUser.get('/', getCourseProgress)
routerUser.get('/:id', getCourseProgressByPurchasedCourseId)

routerUser.put('/:id', putCourseProgress)

routerUser.post('/', postCourseProgress)

routerUser.delete('/:id', deleteCourseProgress)

export default routerUser
