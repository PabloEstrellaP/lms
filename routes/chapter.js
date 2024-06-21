import { Router } from 'express'
import { deleteChapter, getChapter, getChapterById, postChapter, putChapter } from '../controllers/chapter.js'
import { verifyJWT } from '../helpers/JWT.js'

const routerUser = Router()

routerUser.get('/', getChapter)
// routerUser.get('/', [verifyJWT], getChapter)
routerUser.get('/:id', getChapterById)
// routerUser.get('/:id', [verifyJWT], getChapterById)

routerUser.put('/:id', putChapter)
// routerUser.put('/:id', [verifyJWT], putChapter)

routerUser.post('/', postChapter)
// routerUser.post('/', [verifyJWT], postChapter)

routerUser.delete('/:id', deleteChapter)
// routerUser.delete('/:id', [verifyJWT], deleteChapter)

export default routerUser
