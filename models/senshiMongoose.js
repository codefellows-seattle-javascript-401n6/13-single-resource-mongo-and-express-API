'use strict'

const mongoose = require('mongoose');
const Senshi = require('./senshi.js')
mongoose.connect('mongodb://localhost/sailorSenshi');


let sailorMoon = new Senshi({ senshiName: 'Sailor Moon', name: 'Usagi Tsukino', power: 'Lunar Magic', rank: 'Sovereign of Earth' })
let tuxedoMask = new Senshi({ senshiName: 'TuxedoMask', name: ' Mamoru Chiba', power: 'Roses?', rank: 'N/A' })
let sailorMercury = new Senshi({ senshiName: 'Sailor Mercury', name: 'Ami Mizuno', power: 'Intelligence/Water Magic', rank: 'Inner Senshi' })


let saves = [
    sailorMoon.save(),
    tuxedoMask.save(),
    sailorMercury.save(),
]

let postSenshi = () =>{
Promise.all(saves)
    .then((savedSenshi) => {
        console.log('Saved', savedSenshi);
    })
    .then((results) => {
        console.log('Found', results);
        mongoose.disconnect();
    })
}

let getSenshi = (results) => {
    return new Promise((resolve, reject) =>{
    Senshi.find()
     .then((results) => {
            resolve(results);
            console.log('Found', results);
            mongoose.disconnect();
        })
    })
}


let getOneSenshi = (results, id) => {
 // need to put the id in here       
       Senshi.find(`${__id}`)
        .then((results) => {
            console.log('Found', results);
            mongoose.disconnect();
        })
}

let deleteSenshi = (results) => {
    return new Promise((resolve, reject) =>{
        return Senshi.remove()
            .then((results) => {
            resolve(results);
            console.log('All Senshi Deleted', results);
            mongoose.disconnect();
        })
    })
}



module.exports = {getSenshi};