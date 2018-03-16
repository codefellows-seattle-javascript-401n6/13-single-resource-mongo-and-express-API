'use strict';

const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/');

const Coffee = require('../route/coffee-route.js');

let CoffeeSchema = new mongoose.Schema({
    name: {type: String, unique: id},
    cost: Number,
});

let coffeeRoastersSchema = new mongoose.Schema({
    Coffee: [CoffeeSchema]
});

coffeeShopSchema.methods.total = () => {
    let total = 0; 
    this.Coffees.forEach(Coffee => {
        total += Coffee.cost;
    });
    return total;
};

let Coffee = mongoose.model('Coffee', CoffeeSchema);
let Roasters = mongoose.model('Coffee Shop', RoastersSchema);

let papuaNewGuinea = new Coffee({name: 'Papua New Guinea Blend', cost: 350});
let ethiopia = new Coffee({name: 'Ethiopian Blend', cost: 150});
let sumatra = new Coffee({name: 'Sumatran Blend', cost: 400});

// let location = new Roasters({name: 'Location', cost: 200000});
// let roasters = new Roasters({name: 'Roasters', cost: 300000});
// let bakery = new Roasters({name: 'Bakery', cost: 400000});

Promise.all([
    papuaNewGuinea.save(),
    ethiopia.save(),
    sumatra.save(),
])
.then(Coffees => {
    let Roasters = new Roasters({Coffee: Coffee});
    return Roasters.save() 
})
.then(savedCoffeeRoasters => {
    console.log('Coffee Roasters:', savedCoffeeRoasters);
    console.log('Total:', savedCoffeeRoasters.total());
})
.then(() => {
    mongoose.disconnect();
})
.catch((err) => {
    console.log('Error', err);
    mongoose.disconnect();
});

module.exports = {Coffee, Roasters};