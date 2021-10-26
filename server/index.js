const express = require('express')
const path = require('path')
require('dotenv').config()

// const usersController = require('./controllers/users')
// const postsController = require('./controllers/posts')
const app = express()
const port = process.env.PORT || 3100

app
  .use('/', express.static(path.join(__dirname, '../docs')))
  // .use('/users', usersController)
  // .use('/posts', postsController)

app
  .get('*', (req, res) => res.sendFile(path.join(__dirname, '../docs/index.html')))

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})