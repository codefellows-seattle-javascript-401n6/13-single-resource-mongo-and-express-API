'use strict';

const mongoose = require('mongoose');

const Coffee = require('../../model/coffee.js');

mongoose.connect('mongodb://localhost:/test').then(
    () => {
        console.info(`Mongoose connection successful`);
    }
).catch(
    (error) => {
        console.error(`Error on connection: ${error}`);
    }
);

let save = (coffee) => {
    let coffeeModel = new Coffee({
        name: coffee.name,
        cost: coffee.cost,
    });
    return new Promise((resolve, rej) => {
        coffeeModel.save((err, savedCoffee) => {
            resolve(savedCoffee);
        })
    })
};

let get = (id) => {
    return new Promise((resolve, rej) => {
        Coffee.findOne({
            _id: id
        }, (err, coffeeBlends) => {
            resolve(coffeeBlends);
        })
    })
};

let getAll = () => {
    return new Promise((resolve, rej) => {
        Coffee.find((err, coffeeBlends) => {
            resolve(coffeeBlends);
        })
    });
};

let remove = (id) => {
    return new Promise((resolve, rej) => {
        Coffee.remove({
            _id: id
        }, (err, coffee) => {
            resolve(coffee);
        })
    });
};

let removeAll = () => {
    return new Promise((resolve, rej) => {
        Coffee.remove((err, coffeeBlends) => {
            resolve(coffeeBlends);
        })
    });
}

module.exports = {
    save,
    get,
    getAll,
    remove,
    removeAll
};