'use strict';

const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/test');

const Brand = require('../models/brand').Brand;

let create = brand => {
  let newBrand = new Brand({
    name: brand.name,
    cars: brand.cars
  });

  return new Promise((resolve, reject) => {
    newBrand.save((err, savedBrand) => {
      console.log(err);
      if (err) {
        throw err;
      }

      resolve(brand);
    });
  });
};

let getAll = () => {
  return new Promise((resolve, reject) => {
    Brand.find((err, brands) => {
      if (err) {
        throw err;
      }

      resolve(brands);
    });
  });
};

let get = id => {
  return new Promise((resolve, reject) => {
    Brand.findById(id, (err, brand) => {
      if (err) {
        throw err;
      }
      resolve(brand);
    });
  });
};

let update = (id, body) => {
  return new Promise((resolve, reject) => {
    Brand.findByIdAndUpdate(id, body, { new: true }, (err, brand) => {
      if (err) {
        throw err;
      }

      resolve(body);
    });
  });
};

module.exports = { getAll, create, get, update };
