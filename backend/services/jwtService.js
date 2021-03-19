require('dotenv').config()
const jwt = require('jsonwebtoken')

const ONE_HOUR = 60 * 60
const EXPIRATION_TIME = ONE_HOUR

const { JWT_SECRET } = process.env

const createToken = (username) => {
  const now = Math.floor(Date.now() / 1000)
  const claims = {
    sub: username,
    iat: now,
    exp: now + EXPIRATION_TIME,
  }
  return jwt.sign(claims, JWT_SECRET)
}

const verifyToken = (token) => {
  try {
    return jwt.verify(token, JWT_SECRET)
  } catch (error) {
    return null
  }
}

module.exports = { createToken, verifyToken }
