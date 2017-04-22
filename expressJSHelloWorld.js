const express = require("express");

var app = express();
app.get('/home', function(req, res) {
    res.end('Hello World!');
});
var port = process.argv[2];
app.listen(port);