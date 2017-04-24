var express = require("express");
//var crypto = require("crypto");

var app = express();
app.put('/message/:id', function (req, res) {
    var msgId = req.params.id;
    var date = new Date().toDateString();
    
    var str = require('crypto')
                .createHash('sha1')
                .update(date + msgId)
                .digest('hex');
    
    res.send(str);
});

var port = process.argv[2];
app.listen(port);


/*
//The auther solution.

    var express = require('express')
    var app = express()
    
    app.put('/message/:id', function(req, res){
      var id = req.params.id
      var str = require('crypto')
        .createHash('sha1')
        .update(new Date().toDateString() + id)
        .digest('hex')
      res.send(str)
    })
    
    app.listen(process.argv[2])
*/