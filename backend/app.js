const express = require('express');
const bodyParser = require('body-parser');
const router = require('./routes/routing');
const errorLogger = require('./utilities/errorlogger');
const requestLogger = require('./utilities/requestlogger');
// const cors = require("cors");
const app = express();

// app.use(cors());
app.use(function (req, res, next) {
    //Enabling CORS
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Methods", "GET,HEAD,OPTIONS,POST,PUT");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, x-client-key, x-client-token, x-client-secret, Authorization");
    next();
    });
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

app.use(requestLogger);
app.use('/', router);
app.use(errorLogger);


app.listen(2050);
console.log("Server listening in port 2050");


module.exports = app;