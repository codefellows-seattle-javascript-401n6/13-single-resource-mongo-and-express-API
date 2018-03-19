'use strict';

const mongoose = require('mongoose');
const {Schema} = mongoose;
mongoose.connect('mongodb://localhost/coffees');

const Coffee = require('../model/coffee-schema.js');
const Roaster = require('../model/roaster-schema.js');

let papuaNewGuinea = new Coffee({origin: 'Papua New Guinea', roast: 'medium', cost: 400});
let ethiopia = new Coffee({origin: 'Ethiopia', roast: 'light', cost: 200});
let sumatra = new Coffee({origin: 'Sumatra', roast: 'dark', cost: 350});

Promise.all([
    papuaNewGuinea.save(),
    ethiopia.save(),
    sumatra.save(),
])
.then(coffees => {
    let roasters = new Roaster({coffees: coffees});
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