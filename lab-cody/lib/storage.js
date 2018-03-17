'use strict';

const mongoose = require('mongoose');


const Fridge = require('../models/model');



mongoose.connect('mongodb://localhost/beerrun')
.then(() => {
    console.info('as you wish!');
}).catch (
    (error => {
        console.error(`error on connection ${error}`); 
    })
)

 
// function save() {
//     let beerModel = new Fridge.Beers({
//         name: beer.beers.name,
//         ammount: beer.beers.ammount
//     })

//     let fridgeModel = new Fridge({
//         coldOnes: beerModel,
//     });

//     return new Promise((resolve, reject)=> {
//         fridgeModel.save((err, savedFridge)=> {
//             resolve(savedFridge);
//         });
//     });
// }


function getAll() {
    return new Promise((resolve, reject)=> {

        Fridge.Beers.find((err, beers) =>{
            resolve(beers);
        })
    });
}

function get(id) {
    return new Promise((resolve, reject)=> {
        Fridge.Beers.findOne({_id: id}, (err, beer)=> {
            resolve(beer);
        })
    });
}


function update(id, beer) {
    return new Promise((resolve, reject) => {
      Fridge.Beers.findOneAndUpdate(id, beer, (err, beer) => {
        resolve(beer);
      });
    });
  }

function remove(id) {
    return new Promise((resolve, reject)=> {
        Fridge.Beers.remove({_id: id}, (err, beer)=> {
            resolve(beer)
        })
    });
}




module.exports = { get, getAll, remove ,update};