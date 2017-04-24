const express = require("express");

const port = process.argv[2];
var filesPath = process.argv[3];

var app = express();

app.use(require('stylus').middleware({src: filesPath}));

var staticFiles = app.use(express.static(filesPath));

app.get("*", staticFiles);
app.listen(port);

/*
//The auther solution.

    var express = require('express')
    var app = express()
    
    app.use(require('stylus').middleware(process.argv[3]));
    app.use(express.static(process.argv[3]));
    
    
    app.listen(process.argv[2])
*/