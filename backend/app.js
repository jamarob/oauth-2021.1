const express = require('express')
const { existsByUsername } = require('./database/userRepo')
const {
  exchangeCodeForToken,
  getLoggedInUser,
} = require('./services/githubService')

const app = express()

app.get('/auth/login/github/:code', async (request, response) => {
  const { code } = request.params

  if (!code) return response.status(401).send('no code')

  const token = await exchangeCodeForToken(code)

  if (!token) return response.status(401).send('invalid code')

  const username = await getLoggedInUser(token)

  if (!existsByUsername(username))
    return response.status(401).send('unknown user')

  return response.status(200).json(username)
})

module.exports = app
