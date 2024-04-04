import { response } from 'express'
import mongoose from 'mongoose'
import CourseProgress from '../models/mongo/courseProgress.js'

import { getChapterByCourseId } from '../controllers/chapter.js';

export const getCourseProgressByPurchasedCourseId = async (req, res = response) => {
  try {
    const cId = req.params['id']
    const { enabledProgressbarr } = req.query;
    const courseId = mongoose.Types.ObjectId(cId);
    const courseProgress = await CourseProgress.aggregate([
      {
        $lookup: {
          from: "chapters",
          localField: "chapterReference",
          foreignField: "_id",
          as: "chapter"
        }
      },
      {
        $unwind: "$chapter"
      },
      {
        $lookup: {
          from: "courses",
          localField: "chapter.courseReference",
          foreignField: "_id",
          as: "course"
        }
      },
      {
        $unwind: "$course"
      },
      {
        $match: {
          "course._id": courseId
        }
      },

    ])

    const allChapters = await getChapterByCourseId(courseId);

    const cProgress = (courseProgress.length * 100) / allChapters.length;

    for(const oneChapter of courseProgress) {
      for(const changeChapter of allChapters) {
        changeChapter.isWached = false
        if(oneChapter._id === changeChapter._id) changeChapter.isWached = true
      }
    }

    if (!courseProgress) return res.status(404).json({
      ok: false,
      msg: `CourseProgress not found by Purchases Course ID: ${cId}`
    })

    return res.status(200).json({
      ok: true,
      progress: cProgress.toFixed(2),
      msg: enabledProgressbarr ? [] : allChapters
    })

  } catch (error) {
    console.error(error)
    return res.status(500).json({
      ok: false,
      msg: error
    });
  }
}

export const getCourseProgress = async (req, res = response) => {
  try {
    const courseProgresss = await CourseProgress.find({})

    return res.status(200).json({
      ok: true,
      msg: courseProgresss
    })

  } catch (error) {
    console.error(error)
    return res.status(500).json({
      ok: false,
      msg: error
    });
  }
}

export const putCourseProgress = (req, res = response) => {
  const { id } = req.params

  res.status(400).json({
    msg: 'put api',
    id
  })
}

export const postCourseProgress = async (req, res = response) => {
  try {
    const { userReference, chapterReference } = req.body;

    const isAlreadyAdded = await CourseProgress.findOne({
      userReference,
      chapterReference
    })

    if (isAlreadyAdded) return res.status(200).json({
      ok: true,
      msg: isAlreadyAdded
    })

    const courseProgress = new CourseProgress({
      userReference,
      chapterReference
    })

    await courseProgress.save()
    return res.status(200).json({
      ok: true,
      msg: courseProgress
    })

  } catch (error) {
    console.error(error)
    return res.status(500).json({
      ok: false,
      msg: error
    });
  }
}

export const deleteCourseProgress = async (req, res = response) => {
  try {
    const cId = req.params['id'];

    const courseProgress = await CourseProgress.findByIdAndDelete(cId);
    if (!courseProgress) return res.status(404).json({
      ok: false,
      msg: `CourseProgress not found by ID: ${cId}`
    })

    return res.status(200).json({
      ok: true,
      msg: `CourseProgress deleted by ID: ${cId}`
    })

  } catch (error) {
    console.error(error)
    return res.status(500).json({
      ok: false,
      msg: error
    });
  }
}
