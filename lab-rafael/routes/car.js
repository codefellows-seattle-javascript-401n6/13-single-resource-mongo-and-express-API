'use strict';

const express = require('express');
const router = express.Router();
const storage = require('../controllers/car');

router.use((req, res, next) => {
  console.log('Some magic heppening');
  next();
});

router.get('/', (req, res) => {
  res.json({ message: 'Hi there, this is car api' });
});

router.route('/cars')
  .post((req, res) => {
    if(!req.body.model || !req.body.year) {
      res.status(400);
      res.send('Error, bad request body');
    }

    let car = new Car({
      car.model = req.body.model;
      car.year = req.body.year;
    });

    storage.save(car)
      .then(car => {
        res.status(200);
        res.send(car);
      });
  })

  .get((req, res) => {
    Car.find((err, cars) => {
      if(err) {
        res.send(err);
      }

      res.json(cars);
    });
  });


