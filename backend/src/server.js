require('dotenv').config()
const express = require('express');
const path = require('path');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const incidents = require('./routes/incidents');
const app = express();



app.use(express.static(path.join(__dirname, '../../frontend/dist/group2project')));

// Mongoose connection
mongoose.connect(process.env.DB_CONN_STRING, {useNewUrlParser: true, useUnifiedTopology: true});

let mongoDB = mongoose.connection;
mongoDB.on('error', console.error.bind(console, 'Connection Error:'));
mongoDB.once('open', ()=> {
  console.log("Connected to MongoDB...");
});

// route redirects for incidents
app.use('/api/incidents', incidents);


app.get('/*', (req, res) => {
    res.sendFile(path.join(__dirname, '../../frontend/dist/group2project/index.html'));
});

app.listen(process.env.PORT || 8080, () => {
    console.log("Connected");
});