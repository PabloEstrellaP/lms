import { Router } from 'express'
import { deleteCourse, getCourse, getCoursesById, postCourse, putCourse } from '../controllers/course.js'
import { verifyJWT } from '../helpers/JWT.js'

const routerUser = Router()

routerUser.get('/', [verifyJWT], getCourse)
routerUser.get('/:id', [verifyJWT], getCoursesById)

routerUser.put('/:id', [verifyJWT], putCourse)

routerUser.post('/', [verifyJWT], postCourse)

routerUser.delete('/:id', [verifyJWT], deleteCourse)

export default routerUser
