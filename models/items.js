const mongoose = require('mongoose');

let itemSchema = mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  price: {
    type: Number,
    required: true
  },
  img: {
    type: String,
    required: true
  },
  info: {
    type: String
  },
  description: {
    type: String
  },
  seller: {
    type: Object
  }
})

module.exports = Item = mongoose.model('item', itemSchema) // collection items