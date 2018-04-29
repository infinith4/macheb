// http://expressjs.com/ja/starter/basic-routing.html

var express = require('express');
var router = express.Router();

/* GET hello listing. */
router.get('/', function(req, res, next) {
  res.render('hello', { title: 'Hello' });
});

router.post('/', function (req, res) {
    res.send('Got a POST request. POST Data:: name:' + req.body.name);
});

router.put('/user', function (req, res) {
  res.send('Got a PUT request at /hello');
});

router.delete('/user', function (req, res) {
  res.send('Got a DELETE request at /hello');
});


module.exports = router;
