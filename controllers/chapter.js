import { response } from 'express'
import Chapter from '../models/mongo/chapters.js'

export const getChapterByCourseId = async(courseId) => {
  try {
    const chapter = await Chapter.find({
      courseReference: courseId,
      isDeleted: false,
    })
    
    return chapter

  } catch (error) {
    console.error(error)
    return [];
  }
}

export const getChapterById = async(req, res = response) => {
  try {
    const cId = req.params['id']
    const chapter = await Chapter.findOne({
      _id: cId,
      isDeleted: false,
    })
    
    if(!chapter) return res.status(404).json({
      ok: false,
      msg: `Chapter not found by ID: ${cId}`
    }) 

    return res.status(200).json({
      ok: true,
      msg: chapter
    })

  } catch (error) {
    console.error(error)
    return res.status(500).json({
      ok: false,
      msg: error
    });
  }
}

export const getChapter = async(req, res = response) => {
  try {
    const chapters = await Chapter.find({
      isDeleted: false,
    })

    return res.status(200).json({
      ok: true,
      msg: chapters
    })
    
  } catch (error) {
    console.error(error)
    return res.status(500).json({
      ok: false,
      msg: error
    });
  }
}

export const putChapter = (req, res = response) => {
  const { id } = req.params

  res.status(400).json({
    msg: 'put api',
    id
  })
}

export const postChapter = async(req, res = response) => {
  try { 
    const { title, subTitle, description, courseReference } = req.body;
    const chapter = new Chapter({
      title,
      subTitle,
      description,
      courseReference
    })

    await chapter.save()
    return res.status(200).json({
      ok: true,
      msg: chapter
    })

  } catch (error) {
    console.error(error)
    return res.status(500).json({
      ok: false,
      msg: error
    });
  }
}

export const deleteChapter = async(req, res = response) => {
  try {
    const cId = req.params['id'];

    const chapter = await Chapter.findByIdAndUpdate(cId);
    if(!chapter) return res.status(404).json({
      ok: false,
      msg: `Chapter not found by ID: ${cId}`
    }) 

    chapter.isDeleted = true

    await chapter.save()
    return res.status(200).json({
      ok: true,
      msg: `Chapter deleted by ID: ${cId}`
    })

  } catch (error) {
    console.error(error)
    return res.status(500).json({
      ok: false,
      msg: error
    }); 
  }
}
