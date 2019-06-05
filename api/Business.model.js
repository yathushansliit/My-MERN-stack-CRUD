const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Define collection and schema for Business
let Business = new Schema({
    person_first_name: {
    type: String
  },
  person_last_name: {
    type: String
  },
  phone: {
    type: String
  },
  city: {
    type: String
  }
},{
    collection: 'business'
});

module.exports = mongoose.model('Business', Business);