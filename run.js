const express = require('express')
var bodyParser = require("body-parser");
var cors = require('cors');
var dotenv = require('dotenv');

const app = express()
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cors());
dotenv.config();


app.use('/', require('./src/route/Addresswriteback'))
app.use('/', require('./src/route/Addressfetch'))
app.use('/', require('./src/route/Namefetchroute'))
app.use('/', require('./src/route/nameWriteback'))



app.listen(3000, () => console.log("Listening on port 3000..."));