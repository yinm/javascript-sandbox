const express = require('express')
const router = express.Router()

router.post('/', (req, res, next) => {
  if (req.body.save === 'on') {
    res.cookie('my_id', req.body.my_id)
  } else {
    res.cookie('my_id', '')
  }

  res.redirect('http://localhost:3000/')
})

module.exports = router
