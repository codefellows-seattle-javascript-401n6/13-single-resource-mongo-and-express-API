'use strict';
const mongoose = require('mongoose');
const createError = require('http-errors');

let senshiSchema = mongoose.Schema({
  name:{ type: String, require: true},
  age:{ type: String, require: true}
});
const Senshi = mongoose.model('senshi', senshiSchema);
module.exports = Senshi;