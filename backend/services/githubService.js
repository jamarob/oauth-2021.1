require('dotenv').config()
const axios = require('axios')

const { GITHUB_CLIENT_SECRET, GITHUB_CLIENT_ID } = process.env

const exchangeCodeForToken = (code) =>
  axios
    .post(
      'https://github.com/login/oauth/access_token',
      {
        code,
        client_id: GITHUB_CLIENT_ID,
        client_secret: GITHUB_CLIENT_SECRET,
      },
      {
        headers: {
          Accept: 'application/json',
        },
      }
    )
    .then((response) => response.data.access_token)

const getLoggedInUser = (token) =>
  axios
    .get('https://api.github.com/user', {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
    .then((response) => response.data.login)

module.exports = { exchangeCodeForToken, getLoggedInUser }
