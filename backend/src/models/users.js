let mongoose = require('mongoose');

// create a model class
let Users = mongoose.Schema({
  username: String,
  email: String,
  displayName: String,
  created: Date,
  update: Date,
  salt: String,
  hash: String
},
  {
    collection: "users",
  });

module.exports = mongoose.model('Users', Users);
