'use strict';

const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/cars');

const Car = require('../../modles/car').Car;

function save(car) {
  let carModel = new Car({
    model: car.model,
    year: car.year;
  });

  return new Promise((resolve, reject) => {
    carModel.save((err, savedCar) => {
      resolve(savedCar);
    });
  });
}
