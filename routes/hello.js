// http://expressjs.com/ja/starter/basic-routing.html

var express = require('express');
var router = express.Router();

var mysql      = require('mysql');

const Sequelize = require('sequelize');

/* GET hello listing. */
router.get('/', function(req, res, next) {

  //http://docs.sequelizejs.com/manual/index.html
  const seq = new Sequelize('macheb', 'root', '', {
    host: 'localhost',
    dialect: 'mysql'
  });
  var User = seq.define('User', {
  name: Sequelize.STRING
});
seq.sync(function(errs)
{
  //console.log('DATABASE SYNC', errs);
});
var newUser = new User({
    name: 'user2'
});

newUser.save();
  res.render('hello', { title: 'Hello' });
  // var connection = mysql.createConnection({
  //   host     : 'localhost',
  //   user     : 'root',
  //   password : ''
  // });
  //
  // //これは省略してもoK。
  // connection.connect();
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
