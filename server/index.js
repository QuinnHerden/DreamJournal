const express = require('express')
const path = require('path')
require('dotenv').config()

console.log(`The best class at New Paltz is ${process.env.CLASS}`)

const usersController = require('./controllers/users')
const postsController = require('./controllers/posts')
const app = express()
const port = process.env.PORT || 3100

app
  .use('/', express.static(path.join(__dirname, '../docs'))) //current path + '../docs'

  .use(express.json())
  .use('/users', usersController)
  .use('/posts', postsController)

app
  .get('*', (req, res) => res.sendFile(path.join(__dirname, '../docs/index.html')))

app
  .use((err, req, res, next) => {
    res.status(err.code || 500).send(err)
  })

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})