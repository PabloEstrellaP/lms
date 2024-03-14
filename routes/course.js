import { Router } from 'express'
import { deleteCourse, getCourse, getCoursesById, postCourse, putCourse } from '../controllers/course.js'

const routerUser = Router()

routerUser.get('/', getCourse)
routerUser.get('/:id', getCoursesById)

routerUser.put('/:id', putCourse)

routerUser.post('/', postCourse)

routerUser.delete('/:id', deleteCourse)

export default routerUser
