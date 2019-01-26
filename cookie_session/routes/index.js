var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  let myId = req.cookies.my_id || 'test'
  res.render('index', { title: myId });
});

module.exports = router;
