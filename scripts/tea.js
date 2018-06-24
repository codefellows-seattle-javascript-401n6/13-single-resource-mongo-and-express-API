'use strict';

const mongoose = require('mongoose');
const {Schema} = mongoose;

mongoose.connect('mongodb://localhost/teas');

const Tea = require('../models/teaModel');
const Brand = require('../models/teaType');

let ahmadTea = new Tea({
  name: 'English Breakfast',
  brand: 'Ahmad Tea',
  price: 5.32,
});
let clipperTea = new Tea({
  name: 'Snore & Peace Gift Caddy',
  Brand: 'Clipper Tea',
  price: 10.00,
});
let glengettie = new Tea({
  name: 'Gold',
  brand: 'Glengettie',
  price: 9.99,
});

Promise.all([
  ahmadTea.save(),
  clipperTea.save(),
  glengettie.save(),
])
  .then(teas => {
    let brands = new Brand({
      teas: teas,
    });
    return brands.save();
  })
  .then(() => {
    mongoose.disconnect();
  })
  .catch((error) => {
    console.error(error);
    mongoose.disconnect();
  });

// module.exports = {Tea, Brand};
module.exports = {Tea, Brands};