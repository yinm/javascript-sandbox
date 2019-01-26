const express = require('express')
const router = express.Router()

router.post('/', (req, res, next) => {
  res.redirect(`http://localhost:3000/?my_id=${req.body.my_id}`)
})

module.exports = router
