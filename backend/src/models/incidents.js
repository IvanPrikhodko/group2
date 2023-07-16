let mongoose = require('mongoose');

// create a model class
let Incidents = mongoose.Schema({
    counter: Number,
    incidentNumber: String,
    description: String,
    priority: Number,
    customerName: String,
    status: String,
    lastUpdateTime: String,
    duration: Number,
    resolution: String
},
{
  collection: "incidents",
});

module.exports = mongoose.model('Incidents', Incidents);
