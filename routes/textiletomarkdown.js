var express = require('express');
var models = require("../models");
var router = express.Router();
var multer = require('multer');
var fs = require('fs');

var upload = multer({ dest: './uploads/' }).single('textile');

const exec = require('child_process').exec;

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.render('textiletomarkdown', { title: 'textiletomarkdown' });
});

router.post('/', function(req, res, next) {
  upload(req, res, function(err) {
    if(err) {
      res.send("Failed to write " + req.file.destination + " with " + err);
    } else {
      execcmd = 'ruby ~/gitrepo/github/textiletomarkdown/textiletomarkdown.rb ~/gitrepo/github/macheb/uploads/' + req.file.filename + " ~/gitrepo/github/macheb/textiletomarkdown_conv"
      console.log(execcmd)
      exec(execcmd, (err, stdout, stderr) => {
        if (err) { console.log(err); }
        console.log(stdout);
        var output_filepath = '/home/ubatm/gitrepo/github/macheb/textiletomarkdown_conv/' + req.file.filename + '_conv.txt'
        var data = fs.readFileSync(output_filepath, 'utf-8');
        res.send("uploaded " + req.file.originalname + " as " + req.file.filename + " Size: " + req.file.size + "data:" + data);
      });
    }
  });
});

module.exports = router;
