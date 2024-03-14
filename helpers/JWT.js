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

export const comprobarJWT = (token = '') => {
  try {
    const { id } = jwt.verify(token, process.env.JWT_KEY)
    return [true, id]
  } catch (error) {
    return [false, null]
  }
}
