var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  const myId = req.query.my_id || 'test'
  res.render('index', { title: myId });
});

module.exports = router;
