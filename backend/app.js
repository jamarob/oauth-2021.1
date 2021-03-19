const express = require('express')
const { existsByUsername } = require('./database/userRepo')
const {
  exchangeCodeForToken,
  getLoggedInUser,
} = require('./services/githubService')
const { createToken } = require('./services/jwtService')

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

module.exports = app
