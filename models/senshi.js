'use strict'
const mongoose = require('mongoose');
let senshiSchema = mongoose.Schema({
    senshiName: {type: String, unique: true}, 
});
const Senshi = mongoose.model('senshi', senshiSchema);

module.exports = Senshi;