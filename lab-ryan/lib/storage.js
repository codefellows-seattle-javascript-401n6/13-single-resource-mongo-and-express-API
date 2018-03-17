'use strict';

const mongoose = require('mongoose');
const Norris = require('../model/norris.js');

mongoose.connect('mongod://localhost/norris')
.then(() => {
    console.info('mongoose is connected');
}).catch (
    (error => {
        console.error(`oops, something went wrong, ${error}`);
    })
)

function getAll(){
    let 
    return new Promise((resolve, reject) => {
        resolve();
    });
}

function get(id){
    return new Promise((resolve, reject) => {
        resolve();
    });
}

function save(){
    return new Promise((resolve, reject) => {
        resolve();
    });
}

funciton update(id) {
    return new Promise((resolve, reject) => {
        if(err){
            console.log(err);
        }
        resolve();
    });
}

function remove(id){
    return new Promise((resolve, reject) => {
        if(err){
            console.log(err);
        }
        resolve();
    });
}

module.exports = {
    save,
    getAll,
    get,
    update,
    remove,
};