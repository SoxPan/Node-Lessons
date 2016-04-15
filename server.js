var express = require('express');
var app = express();
var path = require('path');
var adminRouter = express.Router();
var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/db_name');

app.get('/', function(req, res){
    res.sendFile(path.join(__dirname + '/index.html'));
});

adminRouter.get('/', function(req, res){
   res.send('I`m The Dashboard');
});

adminRouter.get('/users', function(req, res){
   res.send('I show all users');
});

adminRouter.param('name', function(req, res, next , name){
    console.log('doing some validation for ' + name);
    req.name = name;
    next();
});

adminRouter.get('/users/:name', function(req, res){
   res.send('Hello ' + req.name + '!');
});

adminRouter.get('/posts', function(req, res) {
   res.send('I show all posts');
});

app.use('/admin', adminRouter);

adminRouter.use(function(req, res, next) {
    console.log(req.method, req.url);
    next();
});

app.route('/login')
    
    .get(function(req, res){
        res.send('this is login page');
    })

    .post(function(req, res){
        console.log('processing');
        res.send('processing the login page');
    });


app.listen(1337);
console.log('Localhost:1337');