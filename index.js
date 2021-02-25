const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const routes = require('./routes/api');

// setup exprss app
const app = express();

// connect to mongodb
mongoose.connect('mongodb://localhost/ninjago', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true,
});
mongoose.Promise = global.Promise;

app.use(express.static('public'));

//middlewares -- always above router
app.use(bodyParser.json());

// initilize ports
app.use('/api', routes); // uses api before all routes

//error handling middlewares
app.use(function (err, req, res, next) {
  //console.log(err);
  res.status(422).send({ error: err.message });
});

//listen for request
app.listen(process.env.port || 4000, function () {
  console.log('Now listening for request');
});
