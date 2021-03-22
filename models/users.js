const mongoose = require('mongoose');

let userSchema = mongoose.Schema({
  username: {
    type: String,
    required: true,
    unique: true
  },
  email: {
    type: String,
    required: true,
    unique: true
  },
  password: {
    type: String,
    required: true
  },
  items: {
    type: Array
  },
  cart: {
    type: Array
  }
})

module.exports = User = mongoose.model('user', userSchema) // collection users