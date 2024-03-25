import { Router } from 'express'
import { deletePurchasedCourse, getPurchasedCourse, getPurchasedCourseByUserIdAndCourseId, postPurchasedCourse, putPurchasedCourse } from '../controllers/purchasedCourses.js'

const routerUser = Router()

routerUser.get('/', getPurchasedCourse)
routerUser.get('/:id', getPurchasedCourseByUserIdAndCourseId)

routerUser.put('/:id', putPurchasedCourse)

routerUser.post('/', postPurchasedCourse)

routerUser.delete('/:id', deletePurchasedCourse)

export default routerUser
