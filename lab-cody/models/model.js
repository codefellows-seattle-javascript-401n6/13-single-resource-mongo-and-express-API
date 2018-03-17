'use strict';

const mongoose = require('mongoose');


// let BREWS = ['Mannys', 'Vortex Ipa', 'Evo Ipa', 'Ninja Porter', 'Cavatica Stout', 'Bodhizafa']

let BeerSchema = mongoose.Schema({
    name: String,
    ammount: {type: Number, min: 1, max: 12}
});

let FridgeSchema = mongoose.Schema({
    coldOnes: BeerSchema
})


let Beers = mongoose.model('Beers', BeerSchema);
let Fridge = mongoose.model('Fridge', FridgeSchema);

module.exports = Beers, Fridge;