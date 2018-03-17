'use strict';

const mongoose = require('mongoose');

const Coffee = require('../model/coffee-schema.js');
const Roaster = require('../model/roaster-schema.js');

const DATABASE_URL = process.env.MONGODB_URI || 'mongodb://localhost/coffees';

mongoose.connect(DATABASE_URL).then(
    () => {
        console.info(`Mongoose connection successful`);
    }
).catch(
    (error) => {
        console.error(`Error on connection: ${error}`);
    });

let seed = () => {
    return removeAll()
        .then(() => {
            return Promise.all([
                save(new Coffee({
                    origin: 'Papua New Guinea',
                    roast: 'medium',
                    cost: 400
                })),
                save(new Coffee({
                    origin: 'Ethiopia',
                    roast: 'light',
                    cost: 200
                })),
                save(new Coffee({
                    origin: 'Sumatra',
                    roast: 'dark',
                    cost: 350
                }))
            ])
        });
};

let save = (coffee) => {
    let roasterModel = new roasterModel({
        cost: coffee.quote.cost,
    });
    let coffeeModel = new Coffee({
        origin: coffee.origin,
        roast: coffee.roast,
        timestamp: coffee.timestamp,
        roaster: roasterModel,
    });
    return new Promise((resolve, rej) => {
        coffeeModel.save((err, savedCoffee) => {
            resolve(savedCoffee);
        });
    });
};

let get = (id) => {
    return new Promise((resolve, rej) => {
        Coffee.findOne({
            _id: id
        }, (err, coffee) => {
            resolve(coffee);
        })
    })
};

let getAll = () => {
    return new Promise((resolve, rej) => {
        Coffee.find((err, coffees) => {
            resolve(coffees);
        })
    });
};

let update = (id, coffee) => {
    return new Promise((resolve, rej) => {
        Coffee.findOneAndUpdate(id, coffee, (err, coffee) => {
            resolve(coffee);
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

module.exports = {
    seed,
    save,
    get,
    getAll,
    update,
    remove,
};