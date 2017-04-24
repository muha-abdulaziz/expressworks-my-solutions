var fs = require("fs");
var express = require("express");

var app = express();

app.get('/books', function (req, res) {
    var aFile = process.argv[3];
    fs.readFile(aFile, function (err, str) {
        if (err) res.send(500);
        
        res.json(JSON.parse(str));
    });
    
    //var str = fs.readFileSync(aFile);
    //res.json(JSON.parse(str));
});

var port = process.argv[2];
app.listen(port);

/*
//The auther solution.

    var express = require('express')
    var app = express()
    var fs = require('fs')
    
    app.get('/books', function(req, res){
      var filename = process.argv[3]
      fs.readFile(filename, function(e, data) {
        if (e) return res.send(500)
        try {
          books = JSON.parse(data)
        } catch (e) {
          res.send(500)
        }
        res.json(books)
      })
    })
    
    app.listen(process.argv[2])
*/