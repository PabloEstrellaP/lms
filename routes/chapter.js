import { Router } from 'express'
import { deleteChapter, getChapter, getChapterById, postChapter, putChapter } from '../controllers/chapter.js'

const routerUser = Router()

routerUser.get('/', getChapter)
routerUser.get('/:id', getChapterById)

routerUser.put('/:id', putChapter)

routerUser.post('/', postChapter)

routerUser.delete('/:id', deleteChapter)

export default routerUser
