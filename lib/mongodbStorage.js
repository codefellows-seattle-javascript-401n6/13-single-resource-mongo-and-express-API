'use strict';

const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/teas');

const Tea = require('../models/tea');

let save = (tea) => {
  let teaModel = new Tea({
    name: tea.name,
    brand: tea.brand,
    price: tea.price,
  });

  return new Promise(resolve, reject => {
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

module.exports = {save, getAll, getOne, removeOne, removeAll};

