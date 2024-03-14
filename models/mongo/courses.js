import pkg from 'mongoose'
const { Schema, model } = pkg

const CourseSchema = Schema({

  title: {
    type: String,
    required: true
  },
  subTitle: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true
  },
  isDeleted: {
    type: Boolean,
    default: false
  }

})

// CourseSchema.method('toJSON', function () {
//   const { __v, _id, ...object } = this.toObject()
//   object.uid = _id
//   return object
// })

export default model('Course', CourseSchema)
