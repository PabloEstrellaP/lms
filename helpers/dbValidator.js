import User from '../models/mongo/users.js'

export const isEmailTaken = async (email) => {
  const existeEmail = await User.findOne({ email })
  if (existeEmail) throw new Error('Email has already been taken')
}
