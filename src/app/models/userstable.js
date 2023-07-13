let mongoose = require('mongoose');

// create a model class
let test = mongoose.Schema({
    
    Username: String,
    Password: String,
    Email: String,
    UserType: Object,
},
{
  collection: "users"
});

module.exports = mongoose.model('Test', test);