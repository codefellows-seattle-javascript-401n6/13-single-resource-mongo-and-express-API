'use strict'
const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/27017');

//set the schemas
let carSchema = mongoose.Schema({
    make: String,
    model: String,
    year: Number
});

let inventorySchema = mongoose.Schema({
    cars: [carSchema]
})
let Car = mongoose.Model('Car', carSchema);
let Inventory = mongoose.Model('Inventory', inventorySchema);


//creating new cars
let ferarri = new Car({
    name: 'Ferarri', 
    model: 'LaFerarri Aperta',
    year: 2017
});
let lamborghini = new Car({
    name: 'Lamborghini',
    model: 'SV Coupe',
    speed: 2016
});
let geo = new Car({
    name: 'Geo',
    model: 'Metro',
    speed: 1994
});


Promise.all([
    ferarri.save(),
    lamborghini.save(),
    geo.save()
])
.then(cars => {
    let car = new Car({cars: cars});
    return car.save()
})
.then(garage => {
    console.log('Cars', garage);
})
.then(() => {
    mongoose.disconnect();
})
.then((err) => {
    console.log('Error: ', err);
    mongoose.disconnect();
});


module.exports = carSchema, inventorySchema;