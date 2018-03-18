'use strict'
const mongoose = require('mongoose');

//set the schemas
let carSchema = mongoose.Schema({
    make: String,
    model: String,
    year: Number
});

let garageSchema = mongoose.Schema({
    cars: [carSchema]
});

let Car = mongoose.model('Car', carSchema);
let Garage = mongoose.model('Garage', garageSchema);

//create new cars
let ferarri = new Car({make: 'Ferarri', model: 'LaFerarri Aperta', year: 2017});
let lamborghini = new Car({make: 'Lamborghini', model: 'SV Coupe', year: 2016});
let prius = new Car({make: 'Toyota', model: 'Prius', year: 2007});


Promise.all([
    ferarri.save(),
    lamborghini.save(),
    prius.save()
])
.then(cars => {
    let newGarage = new Garage({cars: cars});
    return newGarage.save()
})
.then((savedCars) => {
    console.log(savedCars);
})
.catch((err) => {
    console.log('Error: ', err)
});

module.exports = {Car, Garage};