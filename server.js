var express = require('express');
var app = express();
var mongodb = require('mongodb');
var path = require('path');

app.use(express.static(path.join(__dirname)));

app.get('*', function (req, res){
    res.sendFile(path.join(__dirname+'/index.html'));
});



app.listen(1337);
console.log('Localhost:1337');