const { verifyToken } = require('../services/jwtService')

const jwtAuthFilter = (request, response, next) => {
  const authorizationHeader = request.headers.authorization

  if (!authorizationHeader)
    return response.status(401).send('no authorization header')

  const token = authorizationHeader.replace('Bearer', '').trim()

  const claims = verifyToken(token)

  if (!claims) return response.status(401).send('invalid token')

  const username = claims.sub

  response.locals = { username }

  next()
}

module.exports = jwtAuthFilter
