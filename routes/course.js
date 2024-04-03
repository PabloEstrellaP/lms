import { Router } from 'express'
import { deleteCourse, getCourse, getCoursesById, postCourse, putCourse } from '../controllers/course.js'
import { comprobarJWT } from '../helpers/JWT.js'

const routerUser = Router()

routerUser.get('/', [comprobarJWT], getCourse)
routerUser.get('/:id', [comprobarJWT], getCoursesById)

routerUser.put('/:id', [comprobarJWT], putCourse)

routerUser.post('/', [comprobarJWT], postCourse)

routerUser.delete('/:id', [comprobarJWT], deleteCourse)

export default routerUser
