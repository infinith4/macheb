var express = require('express');
var models = require("../models");
var router = express.Router();
var multer = require('multer');
var fs = require('fs');
var async = require('async');

var upload = multer({ dest: './uploads/' }).single('textile');

const exec = require('child_process').exec;
var path = require("path");

/* GET users listing. */
router.get('/', function(req, res, next) {
  console.log(global.appRoot);
  console.log("__dirname = %s", path.resolve(__dirname));
  res.render('textiletomarkdown', { title: 'Convert Textile to Markdown', markdown: '' });
});

router.post('/', function(req, res, next) {
  let textileAry = req.body.textileTextArea.split(/\r?\n/g);
  console.log(textileAry);
  let textileLines = '';
  async.each(textileAry, function(i, callback){
    setTimeout(function(){
      textileLines += i + '\n';
      callback();
    }, 5000);
  }, function (err){
    if(err){
      return console.log(err);
    }
    //console.log('all done');
    console.log(textileLines);
    execcmd = 'ruby ' + global.appRoot + '/utils/textiletomarkdown_lines.rb ' + '\'' + textileLines + '\'';
    console.log(execcmd)
    exec(execcmd, (err, stdout, stderr) => {
      if (err) { console.log(err); }
      //console.log(stdout);
      res.render('textiletomarkdown', { title: 'Convert Textile to Markdown', textileText: req.body.textileTextArea, markdown : stdout});
    });
  });

  //  console.log(req.body.textileTextArea.split(/[^\r\n]*(\r\n|\r|\n|$)/g));
});

// router.post('/', function(req, res, next) {
//   upload(req, res, function(err) {
//     if(err) {
//       res.send("Failed to write " + req.file.destination + " with " + err);
//     } else {
//       execcmd = 'ruby ' + global.appRoot + '/utils/textiletomarkdown.rb ' + global.appRoot + '/uploads/' + req.file.filename + ' ' + global.appRoot + '/textiletomarkdown_conv'
//       console.log(execcmd)
//       exec(execcmd, (err, stdout, stderr) => {
//         if (err) { console.log(err); }
//         console.log(stdout);
//         var output_filepath = global.appRoot + '/textiletomarkdown_conv/' + req.file.filename + '_conv.txt'
//         var markdowndata = fs.readFileSync(output_filepath, 'utf-8')
//         console.log(markdowndata)
//         //res.send("uploaded " + req.file.originalname + " as " + req.file.filename + " Size: " + req.file.size + "<br />data:<br />" + data);
//         res.render('textiletomarkdown', {title: 'textiletomarkdown', markdown : markdowndata});
//       });
//     }
//   });
// });

module.exports = router;
