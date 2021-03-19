const express = require('express')
const { existsByUsername, findByUsername } = require('./database/userRepo')
const jwtAuthFilter = require('./middleware/jwtAuthFilter')
const {
  exchangeCodeForToken,
  getLoggedInUser,
} = require('./services/githubService')
const { createToken, verifyToken } = require('./services/jwtService')

const app = express()

app.get('/auth/login/github/:code', async (request, response) => {
  const { code } = request.params

  if (!code) return response.status(401).send('no code')

  const githubToken = await exchangeCodeForToken(code)

  if (!githubToken) return response.status(401).send('invalid code')

  const username = await getLoggedInUser(githubToken)

  if (!existsByUsername(username))
    return response.status(401).send('unknown user')

  const jwt = createToken(username)

  return response.status(200).json(jwt)
})

app.get('/api/profile', jwtAuthFilter, (request, response) => {
  const user = findByUsername(response.locals.username)

  return response.status(200).json(user)
})

module.exports = app
