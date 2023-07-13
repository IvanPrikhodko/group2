const express = require('express');
const path = require('path');
const app = express();
const mongoose = require('mongoose');

app.use(express.static(__dirname + '/dist/group2project'));

//code here
module.exports = {
    //local MongoDB deployment ->
    "URI": "mongodb+srv://ivan:ivanpassword@comp229cluster.i8emohk.mongodb.net/"
  };

  // moddules for node and express
let createError = require('http-errors');
let express = require('express');
let path = require('path');
let cookieParser = require('cookie-parser');
let logger = require('morgan');

// import "mongoose" - required for DB Access
let mongoose = require('mongoose');
// URI
let DB = require('./db');

mongoose.connect(process.env.URI || DB.URI, {useNewUrlParser: true, useUnifiedTopology: true});

let mongoDB = mongoose.connection;
mongoDB.on('error', console.error.bind(console, 'Connection Error:'));
mongoDB.once('open', ()=> {
  console.log("Connected to MongoDB...");
});





app.get('/*', function (req, res) {
    res.sendFile(path.join(__dirname + '/dist/group2project/index.html'));
});
app.listen(process.env.PORT || 8080);