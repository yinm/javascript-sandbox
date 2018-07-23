'use strict';

const axios = require('axios')
const express = require('express')
const bodyParser = require('body-parser')
const app = express()
app.use(bodyParser())

const PROT = process.env.PORT || 3000

app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*')
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept')
  next()
})

app.get('/', (req, res) => {
  if (!req.query.url) {
    const result = {
      error: 'You must parameter => /?url=${API Address}'
    }
    res.send(result)
    return
  }

  axios.get(req.query.url)
    .then((result) => {
      console.log(result)
      res.send(result.data)
    })
    .catch((err) => {
      console.error(err.response)
      console.error(err.response.data)
      const result = {
        error: {
          status: err.response.status,
          statusText: err.response.statusText
        }
      }

      res.send(result)
    })
})

app.listen(PORT)
console.log(`Server running at ${PORT}`)
