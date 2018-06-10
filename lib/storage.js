'use strict';

const mongoose = require('mongoose');
const Tea = require('../models/teaModel');
const Brand = require('../models/brandModel');
const DATABASE_URL = process.env.MONGODB_URI || 'mongod://localhost/teas';

mongoose.connect(DATABASE_URL)
  .then(() => {
    console.log('Mongoose Connection Active');
  })
  .catch((error) => {
    console.error('error: ', error);
  });

let seed = () => {
  return removeAll()
    .then(() => {
      return Promise.all([
        save(new Tea({
          name: 'English Breakfast',
          brand: 'Ahmad Tea',
          price: 5.32,
        })),
        save(new Tea({
          name: 'Snore & Peace Gift Caddy',
          Brand: 'Clipper Tea',
          price: 10.00,
        })),
        save(new Tea({
          name: 'Gold',
          brand: 'Glengettie',
          price: 9.99,
        }))
      ]);
    });
};

let save = (tea) => {
  let brandModel = new brandModel({
    cost: tea.quote.cost,
  });
  let teaModel = new Tea({
    name: tea.name,
    brand: tea.brand,
    price: tea.price,
  });
  return new Promise((resolve, reject) => {
    teaModel.save((error, savedTea) => {
      resolve(savedTea);
    });
  });
};

let getAll = () => {
  return new Promise((resolve, reject) => {
    Tea.find((error, teas) => {
      resolve(teas);
    });
  });
};

let getOne = (id) => {
  return new Promise((resolve, reject) => {
    Tea.findOne({_id: id}, (error, teas) => {
      resolve(teas);
    });
  });
};

let update = (id, tea) => {
  return new Promise((resolve, reject) => {
    Tea.findOneAndUpdate(id, tea, (error, tea) => {
      resolve(tea);
    });
  });
};

let removeOne = (id) => {
  return new Promise((resolve, reject) => {
    Tea.remove({_id: id}, (error, tea) => {
      resolve(tea);
    });
  });
};

let removeAll = () => {
  return new Promise((resolve, reject) => {
    Tea.remove((error, teas) => {
      resolve(teas);
    });
  });
};

module.exports = {seed, save, getAll, getOne, update, removeOne, removeAll};