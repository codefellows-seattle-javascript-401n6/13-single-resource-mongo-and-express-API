'use strict';

const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/');

const Coffee = require('../route/coffee-route.js');

let itemSchema = new mongoose.Schema({
    name: {type: String, unique: id},
    cost: Number,
});

let coffeeShopSchema = new mongoose.Schema({
    items: [itemSchema]
});

coffeeShopSchema.methods.total = () => {
    let total = 0; 
    this.items.forEach(item => {
        total += item.cost;
    });
    return total;
};

let Item = mongoose.model('Item', itemSchema);
let CoffeeShop = mongoose.model('Coffee Shop', coffeeShopSchema);

let coffee = new Item({name: 'Coffee', cost: 350});
let milk = new Item({name: 'Milk', cost: 150})
let pastries = new Item({name: 'Pastries', cost: 400});

Promise.all([
    coffee.save(),
    milk.save(),
    pastries.save(),
])
.then(items => {
    let coffeeShop = new CoffeeShop({items: items});
    return coffeeShop.save() 
})
.then(savedCoffeeShop => {
    console.log('Coffee Shop:', savedCoffeeShop);
    console.log('Total Cost:', savedCoffeeShop.total());
})
.then(() => {
    mongoose.disconnect();
})
.catch((err) => {
    console.log('Error', err);
    mongoose.disconnect();
});

module.exports = {Item, CoffeeShop};