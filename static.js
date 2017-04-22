const express = require("express");
const port = process.argv[2];
var filePath = process.argv[3];

var app = express();
var staticIndex = app.use(express.static(filePath));
app.get('*', staticIndex);

app.listen(port);

/*
//The auther solution.

var path = require('path')
var express = require('express')
var app = express()

app.use(express.static(process.argv[3]||path.join(__dirname, 'public')));

app.listen(process.argv[2])
*/