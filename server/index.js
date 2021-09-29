const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.send('My word!')
})
app.get('/newpaltz', (req, res) => {
  res.send('No Paltz!')
})


app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})
