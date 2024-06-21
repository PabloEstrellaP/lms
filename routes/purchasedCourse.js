import { Router } from 'express'
import { deletePurchasedCourse, getPurchasedCourse, getPurchasedCourseByUserIdAndCourseId, postPurchasedCourse, putPurchasedCourse } from '../controllers/purchasedCourses.js'
import { verifyJWT } from '../helpers/JWT.js'

const routerUser = Router()

// routerUser.get('/', [verifyJWT], getPurchasedCourse)
routerUser.get('/', getPurchasedCourse)
// routerUser.get('/:id', [verifyJWT], getPurchasedCourseByUserIdAndCourseId)
routerUser.get('/:id', getPurchasedCourseByUserIdAndCourseId)

// routerUser.put('/:id', [verifyJWT], putPurchasedCourse)
routerUser.put('/:id', putPurchasedCourse)

// routerUser.post('/', [verifyJWT], postPurchasedCourse)
routerUser.post('/', postPurchasedCourse)

// routerUser.delete('/:id', [verifyJWT], deletePurchasedCourse)
routerUser.delete('/:id', deletePurchasedCourse)

export default routerUser
