var express = require('express');
var models = require("../models");
var router = express.Router();
var multer = require('multer');
var fs = require('fs');

var upload = multer({ dest: './uploads/' }).single('textile');

const exec = require('child_process').exec;
var path = require("path");

/* GET users listing. */
router.get('/', function(req, res, next) {
  console.log(global.appRoot);
  console.log("__dirname = %s", path.resolve(__dirname));
  res.render('textiletomarkdown', { title: 'textiletomarkdown', markdown: '' });
});

router.post('/', function(req, res, next) {
  upload(req, res, function(err) {
    if(err) {
      res.send("Failed to write " + req.file.destination + " with " + err);
    } else {
      execcmd = 'ruby ' + global.appRoot + '/utils/textiletomarkdown.rb ' + global.appRoot + '/uploads/' + req.file.filename + ' ' + global.appRoot + '/textiletomarkdown_conv'
      console.log(execcmd)
      exec(execcmd, (err, stdout, stderr) => {
        if (err) { console.log(err); }
        console.log(stdout);
        var output_filepath = global.appRoot + '/textiletomarkdown_conv/' + req.file.filename + '_conv.txt'
        var markdowndata = fs.readFileSync(output_filepath, 'utf-8')
        console.log(markdowndata)
        //res.send("uploaded " + req.file.originalname + " as " + req.file.filename + " Size: " + req.file.size + "<br />data:<br />" + data);
        res.render('textiletomarkdown', {title: 'textiletomarkdown', markdown : markdowndata});
      });
    }
  });
});

module.exports = router;
