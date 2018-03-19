'use strict';

const mongoose = require('mongoose');
const Car = require('../model/car.js').Car;
const Garage = require('../model/car.js').Garage;
mongoose.connect('mongodb://localhost/cars');


//GET CARS
function get(id) {
    return new Promise((resolve, reject) => {
      Car.findOne({_id: id}, (err, car) => {
        resolve(car);
      })
    });
  }

//GET ALL CARS
function getAll() {
  return new Promise((resolve, reject) => {
    return Car.find()
    .then(results => {
      resolve(results);
      })
    });
  }


//UPDATE CARS
function update(id, car){
  return new Promise((resolve, reject) => {
    Car.findOneAndUpdate(id, car, (err, car) => {
      resolve(car);
    });
  });
}


function remove(id){
  return new Promise((resolve, reject) => {
    Car.remove({_id: id}, (err, car) => {
      resolve(car)
    });
 });
}

module.exports = {get, getAll, update, remove};