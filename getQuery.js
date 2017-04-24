var express = require("express");

var app = express();

app.get("/search", function (request, response) {
    //var str = request.query.results;
    var str = request.query;
    response.send(JSON.stringify(str));
});

app.listen(process.argv[2]);


/*
//The auther solution.

    var express = require('express')
    var app = express()
    
    app.get('/search', function(req, res){
      var query = req.query
      res.send(query)
    })
    
    app.listen(process.argv[2])
*/