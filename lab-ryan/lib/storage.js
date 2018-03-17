'use strict';

const mongoose = require('mongoose');

const Norris = require('../model/model.js');

mongoose.connect('mongod://localhost/27017')
.then(() => {
    console.info('mongoose is connected');
}).catch (
    (error => {
        console.error(`oops, something went wrong, ${error}`);
    })
)

// function save(){
//     return new Promise((resolve, reject) => {
        
//         resolve(norris);
//     });
// }

function getAll(){
    return new Promise((resolve, reject) => {
        Norris.Movies.find((err, norris) => {
            resolve(norris);
        });
    });
}

function get(id){
    return new Promise((resolve, reject) => {
        Norris.Movies.findOne({_id: id}, (err, norris) => {
            resolve(norris);
        });
    });
}

function update(id) {
    return new Promise((resolve, reject) => {
        Norris.Movies.findOneAndUpdate(id, norris, (err, norris) => {
           resolve(norris);
        });
    });
}

function remove(id){
    return new Promise((resolve, reject) => {
        Norris.Movies.remove({_id: id}, (err, norris) => {
            resolve(norris);
        });
    });
}

module.exports = {
    // save,
    getAll,
    get,
    update,
    remove,
};