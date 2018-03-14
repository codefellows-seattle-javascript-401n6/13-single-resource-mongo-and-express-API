'use strict';

const mongoose = require('mongoose');

let quoteSchema = mongoose.Schema({
  date: {type: Date, default: Date.now},
  expiration: {
    type: Date,
    default: new Date(+ new Date() + 7*24*60*60*1000),
  },
  cost: {type: Number, required: true},
});

let leadSchema = mongoose.Schema({
  name: {type: String, required: true},
  company: String,
  email: {
    type: String,
    required: true,
    unique: true,
    validator: function(v){
      return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(v);
    }
  },
  quote: quoteSchema
});

const Quote = mongoose.model('quotes', quoteSchema);
const Lead = mongoose.model('leads', leadSchema);

module.exports = {
  Quote,
  Lead
}