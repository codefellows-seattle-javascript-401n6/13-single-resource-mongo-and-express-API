'use strict';
const mongoose = require('mongoose');
const storage = require('./storage.js');
// console.log(storage, 'storage after require');

const Fridge = require('../models/model');
const Beer = require('../models/model');


// mongoose.connect('mongodb://localhost/beerrun')
// .then(() => {
//     console.info('yep its up and running');
// }).catch (
//     (error => {
//         console.error(`error on connection ${error}`); 
//     })
// )

function seed(storage) {
    // console.log(storage, 'storage');
    // return storage.remove()
    let fridge = new Fridge()
    // console.log('before fridge .save');
    fridge.save()
    .then((data) => { console.log(data, 'this is data')
        return Promise.all([
            storage.save(new Beer({name: 'Mannys', ammount: 12})),

            // storage.save(new Beer({name: 'Vortex Ipa', ammount: 4})),
            // storage.save(new Beer({name: 'Evo Ipa', ammount: 3})),
            // storage.save(new Beer({name: 'Ninja Porter', ammount: 12})),
            // storage.save(new Beer({name: 'Cavatica Stout', ammount: 6})),
            // storage.save(new Beer({name: 'Bodhizafa', ammount: 6})),
          

            console.log(storage, 'is there anything here in storage?')

        ])
        console.log(fridge, 'fridge am i getting here?');
    });
    // mongoose.disconnect();
}

module.exports = {storage, seed}; 