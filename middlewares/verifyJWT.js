import jwt from 'jsonwebtoken'

const checkJWT = (req, res, next) => {
  const token = req.header('token')
  if (!token) {
    return res.status(401).json({
      ok: false,
      msg: 'No existe el token en la petición'
    })
  }

  try {
    const { id } = jwt.verify(token, process.env.JWT_KEY)
    req.id = id

    next()
  } catch (error) {
    return res.status(401).json({
      ok: false,
      msg: 'Token no valido'
    })
  }
}

export default checkJWT
