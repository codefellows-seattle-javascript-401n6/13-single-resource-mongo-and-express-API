'use strict';

const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/cars');

const carSchema = mongoose.Schema({
  model: {
    type: String
    required: true;
    unique: true;
  },
  year: {
    type: Number,
    min: 1970,
    max: [new Date().getFullYear() + 1, 'That\'s to far from now!']
  }
});

const brandSchema = mongoose.Schema({
  name: {
    type: String,
    required: true
  }
});



const Brand = mongoose.model('Brand', brandSchema);
const Car = mongoose.model('Car', carSchea);

module.exports = { Brand, Car };
