let mongoose = require('mongoose');

// create a model class
let User = mongoose.Schema({
    
    Username: String,
    Password: String,
    Email: String,
    UserType: String,
},
{
  collection: "users"
});

module.exports = mongoose.model('Users', User);