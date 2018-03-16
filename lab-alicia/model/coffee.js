'use strict';

const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/');

const coffee = require('../route/coffee-router.js');

let coffeeSchema = new mongoose.Schema({
    origin: { type: String, required: true, unique: id },
    roast: { type: String, required: true },
    cost: { type: Number, required: true },
    timestamp: { type: Date, required: true },
});

let roastersSchema = new mongoose.Schema({
    coffeeBlends: [coffeeSchema]
});

roastersSchema.methods.total = () => {
    let total = 0; 
    this.coffeeBlends.forEach(coffee => {
        total += coffee.roast;
    });
    return total;
};

let Coffee = mongoose.model('Coffee', coffeeSchema);
let Roasters = mongoose.model('Coffee Roasters', roastersSchema);

let papuaNewGuinea = new Coffee({origin: 'Papua New Guinea', roast: 'medium', cost: 400});
let ethiopia = new Coffee({origin: 'Ethiopia', roast: 'light', cost: 200});
let sumatra = new Coffee({origin: 'Sumatra', roast: 'dark', cost: 350});

Promise.all([
    papuaNewGuinea.save(),
    ethiopia.save(),
    sumatra.save(),
])
.then(coffees => {
    let roasters = new Roasters({coffees: coffees});
    return roasters.save() 
})
.then(savedRoasters => {
    console.log('Coffee Roasters:', savedRoasters);
    console.log('Total Cost:', savedRoasters.total());
})
.then(() => {
    mongoose.disconnect();
})
.catch((err) => {
    console.log('Error', err);
    mongoose.disconnect();
});

module.exports = {Coffee, Roasters};