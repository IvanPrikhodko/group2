const express = require('express');
const path = require('path');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');
const app = express();


app.use(express.static(path.join(__dirname, '../../frontend/dist/group2project')));

//code here
var corsOptions = {
    origin: "https://localhost:8081"
}; 

// app.use(cors(corsOptions));

// //parse requests
// app.use(bodyParser.json());

// //parse requests
// app.use(bodyParser.urlencoded({ extended: true }));

// const db = require("./models");
// db.mongoose
//     .connect(db.url, {
//         useNewUrlParser: true,
//         useUnifiedTopology: true
//     })
//     .then(() => {
//         console.log("Connected to Mongoose");
//     })
//     .catch(err => {
//         console.log("Error connecting", err);
//         process.exit();
//     });

// //simple route
// app.get("/", (req, res) => {
//     res.json({message: "Welcome to the app"});
// }); 

// require("")



app.get('/*', (req, res) => {
    res.sendFile(path.join(__dirname, '../../frontend/dist/group2project/index.html'));
});

app.listen(process.env.PORT || 8080, () => {
    console.log("Connected");
});