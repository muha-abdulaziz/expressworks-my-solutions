const express = require("express");
var bodyparser = require('body-parser');
const port = process.argv[2];

var app = express();
app.use(bodyparser.urlencoded({extended: false}));

app.post('/form', function(req, res){
    var revStr = req.body.str.split('').reverse().join('');
    res.send(revStr);
});
app.listen(port);

/*
//The auther solution.

    var express = require('express')
    var bodyParser = require('body-parser')
    var app = express()
    
    app.use(bodyParser.urlencoded({extended: false}))
    
    app.post('/form', function(req, res) {
      res.send(req.body.str.split('').reverse().join(''))
    })
    
    app.listen(process.argv[2])
*/