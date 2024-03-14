import { response } from 'express'
import Courses from '../models/mongo/courses.js'

export const getCoursesById = async(req, res = response) => {
  try {
    const cId = req.params['id']
    const course = await Courses.findOne({
      _id: cId,
      isDeleted: false,
    })
    
    if(!course) return res.status(404).json({
      ok: false,
      msg: `Course not found by ID: ${cId}`
    }) 

    return res.status(200).json({
      ok: true,
      msg: course
    })

  } catch (error) {
    console.error(error)
    return res.status(500).json({
      ok: false,
      msg: error
    });
  }
}

export const getCourse = async(req, res = response) => {
  try {
    const courses = await Courses.find({
      isDeleted: false,
    })

    return res.status(200).json({
      ok: true,
      msg: courses
    })
    
  } catch (error) {
    console.error(error)
    return res.status(500).json({
      ok: false,
      msg: error
    });
  }
}

export const putCourse = (req, res = response) => {
  const { id } = req.params

  res.status(400).json({
    msg: 'put api',
    id
  })
}

export const postCourse = async(req, res = response) => {
  try { 
    const { title, subTitle, description } = req.body;
    const course = new Courses({
      title,
      subTitle,
      description,
    })

    await course.save()
    return res.status(200).json({
      ok: true,
      msg: course
    })

  } catch (error) {
    console.error(error)
    return res.status(500).json({
      ok: false,
      msg: error
    });
  }
}

export const deleteCourse = async(req, res = response) => {
  try {
    const cId = req.params['id'];

    const course = await Courses.findByIdAndUpdate(cId);
    if(!course) return res.status(404).json({
      ok: false,
      msg: `Course not found by ID: ${cId}`
    }) 

    course.isDeleted = true

    await course.save()
    return res.status(200).json({
      ok: true,
      msg: `Course deleted by ID: ${cId}`
    })

  } catch (error) {
    console.error(error)
    return res.status(500).json({
      ok: false,
      msg: error
    }); 
  }
}
