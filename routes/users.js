var express = require('express');
var models = require("../models");
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  var user_id = req.query.user_id;
  var firstName = req.query.first_name;
  var lastName = req.query.last_name;
  models.User.findOrCreate(
    {"where": {"id": user_id},
     "defaults": {"id": user_id, "firstName": firstName, "lastName": lastName}}
  ).spread(function(user, created){
    res.send({"user": user, "created": created});
  });
});

module.exports = router;
