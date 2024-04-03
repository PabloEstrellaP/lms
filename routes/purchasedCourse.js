import { Router } from 'express'
import { deletePurchasedCourse, getPurchasedCourse, getPurchasedCourseByUserIdAndCourseId, postPurchasedCourse, putPurchasedCourse } from '../controllers/purchasedCourses.js'
import { verifyJWT } from '../helpers/JWT.js'

const routerUser = Router()

routerUser.get('/', [verifyJWT], getPurchasedCourse)
routerUser.get('/:id', [verifyJWT], getPurchasedCourseByUserIdAndCourseId)

routerUser.put('/:id', [verifyJWT], putPurchasedCourse)

routerUser.post('/', [verifyJWT], postPurchasedCourse)

routerUser.delete('/:id', [verifyJWT], deletePurchasedCourse)

export default routerUser
