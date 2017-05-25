import express from 'express';
import bodyParser from 'bodyParser';
var app = express();

app.use(bodyParser.json());

app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

app.get('/', function(req, res, next) {
    // Handle the get for this route
    res.send({foo:'bar'});
});

app.post('/', function(req, res, next) {
// Handle the post for this route
});