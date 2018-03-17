'use strict';

const Beer = require('../models/model');
const Fridge = require('../models/model');

const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/beerfridge');



let mannys = new Beer({name: 'Mannys', ammount: 12});
let vortex = new Beer({name: 'Vortex Ipa', ammount: 4});
let evo = new Beer({name: 'Evo Ipa', ammount: 3});
let ninja = new Beer({name: 'Ninja Porter', ammount: 12});
let cavatica = new Beer({name: 'Cavatica Stout', ammount: 6});
let bodhizafa = new Beer({name: 'Bodhizafa', ammount: 6});


// let beers = [mannys, vortex, evo, ninja, cavatica, bodhizafa]

let fridge = new Fridge(cavatica);
console.log(mannys, 'this is mannys')

fridge.save()
.then(fridge => {
    console.log('Fridge:', fridge);
    mongoose.disconnect();
})
