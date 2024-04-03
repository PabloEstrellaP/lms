import pkg from 'mongoose'
const { Schema, model } = pkg

const ChapterSchema = Schema({

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
    required: true,
  },
  video: {
    type: String,
    required: true
  },
  courseReference: {
    type: Schema.Types.ObjectId,
    ref: 'Course'
  },
  isDeleted: {
    type: Boolean,
    default: false
  }

})

// ChapterSchema.method('toJSON', function () {
//   const { __v, _id, ...object } = this.toObject()
//   object.uid = _id
//   return object
// })

export default model('Chapter', ChapterSchema)
