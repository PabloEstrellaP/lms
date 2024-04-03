/* eslint-disable prefer-promise-reject-errors */
import jwt from 'jsonwebtoken'

export const generarJWT = (id) => {
  return new Promise((resolve, reject) => {
    const uid = { id }
    jwt.sign(uid, process.env.JWT_KEY, {
      expiresIn: '24d'
    }, (err, token) => {
      if (err) {
        reject('No se pudo generar el JWT')
      } else {
        resolve(token)
      }
    })
  })
}

export const verifyJWT = (req, res, next) => {
  try {
    if (!req.headers.authorization) {
      return res.status(400).json({
        ok: false,
        msg: 'Token not found'
      })
    }
    const token = req.headers.authorization.split(' ')[1]
    const { id } = jwt.verify(token, process.env.JWT_KEY)
    req.body.userId = id;
    next()
  } catch (error) {
    console.error(error)
    console.log('Verify token is failed')
    return res.status(500).json({
      ok: false,
      msg: error
    })
  }
}
