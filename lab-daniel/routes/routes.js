'use strict';

const express = require('express');
const Router = express.Router();
const Garage = require('../model/car.js').Garage;
const Car = require('../model/car.js').Car;
const storage = require('../lib/mongo.js');


//GET or GET ALL CARS   
Router.get('/', (req, res) => {
    let id = req.query.id;
    if(id){
        storage.get(id)
        .then(vehicle => {
            res.status(200);
            res.send(vehicle);
        });
    }else {
        storage.getAll()
        .then(vehicles => {
            res.status(200);
            res.send(vehicles);
        });
    }
});

//SAVE NEW CAR
Router.post('/', (req, res) => {
    if(req.body.make === undefined ||
       req.body.model === undefined ||
       req.body.year === undefined){
           res.status(404);
           res.send('Car not found')
       }
    let cars = new Car({
        make: req.body.make,
        model: req.body.model,
        year: req.body.year
    })
    cars.save()
    .then(cars => {
        res.status(200);
        res.send(cars)
    });
});

//UPDATE EXISTING CAR
Router.put('/', (req, res) => {
    let id = req.query.id;
    let car = req.body;
    storage.update(id, car)
    .then(car => {
        res.status(200);
        res.send(car);
    });
});

//DELETES CAR BY ID
Router.delete('/', (req, res) => {
    let id = req.query.id;
    storage.remove(id)
    .then(car => {
        res.status(200);
        res.send(car)
    });
});


module.exports = Router;