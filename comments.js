//Create web server
var express = require('express');
var app = express();
var fs = require('fs');
var bodyParser = require('body-parser');
var path = require('path');

//Create web server
var server = app.listen(8080, function(){
    console.log('Server listening on port 8080');
});

//Create socket server
var io = require('socket.io').listen(server);

//Create database
var Datastore = require('nedb');
var db = new Datastore({filename: 'database.json', autoload: true});

app.use(express.static(__dirname + '/public'));
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

//Get all comments from database
app.get('/api/comments', function(req, res){
    db.find({}, function(err, docs){
        if(err){
            console.log(err);
        }
        res.json(docs);
    });
});

//Post new comment to database
app.post('/api/comments', function(req, res){
    var newComment = {