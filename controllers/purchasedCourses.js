import { response } from 'express'
import PurchasedCourse from '../models/mongo/purchasedCourses.js'

export const getPurchasedCourseByUserIdAndCourseId = async(req, res = response) => {
  try {
    const { userReference, courseReference } = req.query;
    const purchasedCourse = await PurchasedCourse.findOne({
      userReference,
      courseReference,
    })
    
    if(!purchasedCourse) return res.status(404).json({
      ok: false,
      msg: `PurchasedCourse not found by userReference ${userReference} and courseReference ${courseReference}`
    }) 

    return res.status(200).json({
      ok: true,
      msg: purchasedCourse
    })

  } catch (error) {
    console.error(error)
    return res.status(500).json({
      ok: false,
      msg: error
    });
  }
}

export const getPurchasedCourse = async(req, res = response) => {
  try {
    const purchasedCourses = await PurchasedCourse.find({
      isDeleted: false,
    })

    return res.status(200).json({
      ok: true,
      msg: purchasedCourses
    })
    
  } catch (error) {
    console.error(error)
    return res.status(500).json({
      ok: false,
      msg: error
    });
  }
}

export const putPurchasedCourse = (req, res = response) => {
  const { id } = req.params

  res.status(400).json({
    msg: 'put api',
    id
  })
}

export const postPurchasedCourse = async(req, res = response) => {
  try { 
    const { userReference, courseReference } = req.body;
    const isPurchasedCourse = await PurchasedCourse.findOne({
      userReference,
      courseReference,
    })
    
    if(isPurchasedCourse) return res.status(200).json({
      ok: true,
      msg: isPurchasedCourse
    })

    const purchasedCourse = new PurchasedCourse({
      userReference,
      courseReference,
      date: new Date()
    })

    await purchasedCourse.save()
    return res.status(200).json({
      ok: true,
      msg: purchasedCourse
    })

  } catch (error) {
    console.error(error)
    return res.status(500).json({
      ok: false,
      msg: error
    });
  }
}

export const deletePurchasedCourse = async(req, res = response) => {
  try {
    const cId = req.params['id'];

    const purchasedCourse = await PurchasedCourse.findByIdAndUpdate(cId);
    if(!purchasedCourse) return res.status(404).json({
      ok: false,
      msg: `PurchasedCourse not found by ID: ${cId}`
    }) 

    purchasedCourse.isDeleted = true

    await purchasedCourse.save()
    return res.status(200).json({
      ok: true,
      msg: `PurchasedCourse deleted by ID: ${cId}`
    })

  } catch (error) {
    console.error(error)
    return res.status(500).json({
      ok: false,
      msg: error
    }); 
  }
}
