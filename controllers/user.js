import { response } from 'express'
import Users from '../models/mongo/users.js'

export const getUserById = async(req, res = response) => {
  try {
    const cId = req.params['id']
    const user = await Users.findOne({
      _id: cId,
      isDeleted: false,
    })
    
    if(!user) return res.status(404).json({
      ok: false,
      msg: `User not found by ID: ${cId}`
    }) 

    return res.status(200).json({
      ok: true,
      msg: user
    })

  } catch (error) {
    console.error(error)
    return res.status(500).json({
      ok: false,
      msg: error
    });
  }
}

export const getUser = async(req, res = response) => {
  try {
    const users = await Users.find({
      isDeleted: false
    })

    return res.status(200).json({
      ok: false,
      msg: users
    })
    
  } catch (error) {
    console.error(error)
    return res.status(500).json({
      ok: false,
      msg: error
    });
  }
}

export const putUser = (req, res = response) => {
  const { id } = req.params

  res.status(400).json({
    msg: 'put api',
    id
  })
}

export const postUser = async(req, res = response) => {
  try { 
    const { name, lastEmail, email, password } = req.body;
    const user = new Users({
      name,
      lastEmail,
      email,
      password,
    })

    await user.save()
    return res.status(200).json({
      ok: true,
      msg: user
    })

  } catch (error) {
    console.error(error)
    return res.status(500).json({
      ok: false,
      msg: error
    });
  }
}

export const deleteUser = async(req, res = response) => {
  try {
    const cId = req.params['id'];

    const user = await Users.findByIdAndUpdate(cId);
    if(!user) return res.status(404).json({
      ok: false,
      msg: `User not found by ID: ${cId}`
    }) 

    user.isDeleted = true

    await user.save()
    return res.status(200).json({
      ok: true,
      msg: `User deleted by ID: ${cId}`
    })

  } catch (error) {
    console.error(error)
    return res.status(500).json({
      ok: false,
      msg: error
    }); 
  }
}
