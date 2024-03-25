import pkg from 'mongoose'
const { Schema, model } = pkg

const PurchasedCourse = Schema({
 
  userReference: {
    type: Schema.Types.ObjectId,
    ref: 'User'
  },
  courseReference: {
    type: Schema.Types.ObjectId,
    ref: 'Course'
  },
  date: {
    type: Date,
  },
  isCompleted: {
    type: Boolean,
    default: false
  },
  isDeleted: {
    type: Boolean,
    default: false
  }

})

// PurchasedCourse.method('toJSON', function () {
//   const { __v, _id, ...object } = this.toObject()
//   object.uid = _id
//   return object
// })

export default model('PurchasedCourse', PurchasedCourse)
