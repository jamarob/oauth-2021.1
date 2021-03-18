require('dotenv').config()
const app = require('./app')

const { SERVER_PORT } = process.env

app.listen(SERVER_PORT, () =>
  console.log(`listening on http://localhost:${SERVER_PORT}`)
)
