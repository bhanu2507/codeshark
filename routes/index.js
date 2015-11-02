var express = require('express');
var router = express.Router();
var request = require('request');

/* GET home page. */
router.get('/', function(req, res, next) {
  console.log(req.session.guser);
  res.render('index', { title: 'Express', guser: req.session.guser });
});

module.exports = router;
