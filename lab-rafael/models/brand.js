'use strict';

const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/cars');

const carSchema = mongoose.Schema({
  model: {
    type: String,
    required: true
  },
  year: {
    type: Number,
    min: 1970,
    max: [new Date().getFullYear() + 1, "That's to far from now!"]
  }
});

const brandSchema = mongoose.Schema({
  name: {
    type: String,
    required: true,
    unique: true
  },
  cars: [carSchema]
});

brandSchema.methods.total = () => {
  return this.cars.length;
};

const Brand = mongoose.model('Brand', brandSchema);
const Car = mongoose.model('Car', carSchema);

module.exports = { Brand, Car };
