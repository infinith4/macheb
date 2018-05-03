var express = require('express');
var models = require("../models");
var router = express.Router();

/* GET flickrimages json */
router.get('/:id', function(req, res, next) {
  //var id = req.query.id;
  var id = req.params.id
  models.FlickrImages.findAll(
    {"where": {"id": id},
     "defaults": {"id": id}}
  ).spread(function(filckrImages){
    res.send({"filckrImages": filckrImages});
  });
});

module.exports = router;
