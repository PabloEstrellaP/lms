import pkg from 'mongoose'
const { Schema, model } = pkg

const CourseProgress = Schema({
 
  userReference: {
    type: Schema.Types.ObjectId,
    ref: 'User'
  },
  chapterReference: {
    type: Schema.Types.ObjectId,
    ref: 'Chapter'
  },
  isCompleted: {
    type: Boolean,
    default: true
  }

})

// CourseProgress.method('toJSON', function () {
//   const { __v, _id, ...object } = this.toObject()
//   object.uid = _id
//   return object
// })

export default model('CourseProgress', CourseProgress)
