import { Router } from 'express'
import { deleteCourse, getCourse, getCoursesById, postCourse, putCourse } from '../controllers/course.js'
import { verifyJWT } from '../helpers/JWT.js'

const routerUser = Router()

routerUser.get('/', getCourse)
// routerUser.get('/', [verifyJWT], getCourse)
routerUser.get('/:id', getCoursesById)
// routerUser.get('/:id', [verifyJWT], getCoursesById)

routerUser.put('/:id', putCourse)
// routerUser.put('/:id', [verifyJWT], putCourse)

routerUser.post('/', postCourse)
// routerUser.post('/', [verifyJWT], postCourse)

routerUser.delete('/:id', deleteCourse)
// routerUser.delete('/:id', [verifyJWT], deleteCourse)

export default routerUser
