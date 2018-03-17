'use strict';

const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/test');

const Car = require('../../models/car').Car;

let getAll = () => {
  return new Promise((resove, reject) => {
    Car.find((err, cars) => {
      if(err) {
        reject(err);
      }

      resolve(cars);
    })  ;
  });
}

let save = (car) {
  let newCar = new Car({
    name: car.model,
    year: car.year
  });

  return new Promise((resolve, reject) => {
    newCar.save((err, savedCar) => {
      if(err) {
        reject(err);
      }

      resolve(car);
    })
  })
}
