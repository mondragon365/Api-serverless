const serverless = require('serverless-http');
const express = require('express');
const app = express();

const Router = require('./api/routes/index');
const bodyParser = require('body-parser');


app.use(bodyParser.json({ strict: false }));


var router = new Router();
app.use('/', router);

module.exports.handler = serverless(app);