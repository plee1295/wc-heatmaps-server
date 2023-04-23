const express = require('express')
const cors = require('cors')
const fetch = (...args) => import('node-fetch').then(({ default: fetch }) => fetch(...args))
const app = express()
const port = 3000

app.use(cors())
app.use(express.json())

app.post('/', (req, res) => {
  fetch(req.body.src)
    .then(response => response.text())
    .then(html => res.send(html))
    .catch(err => res.send('Error'))
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})