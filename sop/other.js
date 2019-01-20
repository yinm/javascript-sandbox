const express = require('express')

const app = express()
app.use(express.static('other-public'))
app.listen(3001)

console.log('listening to port 3001')
