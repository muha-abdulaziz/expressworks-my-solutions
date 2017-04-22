const express = require("express");
var path = require('path');
const port = process.argv[2];
var temp = process.argv[3];

var app = express();
app.set('views', temp || path.join(__dirname, 'templates'));
app.set("view engine", "jade");

app.get('/home', function (req, res) {
    res.render('index', {date: new Date().toDateString()})
});

app.listen(port);

/*
//The auther solution.

    var express = require('express')
    var app = express()
    app.set('view engine', 'jade')
    app.set('views', process.argv[3])
    app.get('/home', function(req, res) {
      res.render('index', {date: new Date().toDateString()})
    })
    app.listen(process.argv[2])
*/