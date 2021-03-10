const mongoose = require('mongoose');

let itemSchema = mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  description: {
    type: String
  }
})

module.exports = Item = mongoose.model('item', itemSchema) // collection users