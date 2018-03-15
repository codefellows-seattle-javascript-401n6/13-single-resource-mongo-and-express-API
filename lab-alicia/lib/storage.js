'use strict';

const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/coffee');

const Coffee = require('../route/coffee-router.js');

function save(coffee) {
    let coffeeShop = new coffee
}