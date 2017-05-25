import fetch from 'node-fetch';
import express from 'express';
import bodyParser from 'body-parser';
import { DARKSKY_API_KEY, PROXY_API_PORT } from './apiKeys'; // TODO: process.env
const app = express();

app.use(bodyParser.json());

app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

app.get('/', function(req, res, next) {
    const lat = req.query['lat']; 
    const lng = req.query['lng'];
    const units = req.query['units'];
    const url = `https://api.darksky.net/forecast/${DARKSKY_API_KEY}/${lat},${lng}?units=${units}`
    console.log(url);
    fetch(url)
        .then(data => data.json())
        .then(data =>{
            res.send(data);
        })
});

app.post('/', function(req, res, next) {
    // Handle the post for this route
});

app.listen(PROXY_API_PORT, () => {
    console.log(`Proxy api listening on port ${PROXY_API_PORT}`);
})