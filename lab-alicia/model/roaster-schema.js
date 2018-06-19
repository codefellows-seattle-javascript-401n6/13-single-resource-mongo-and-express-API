'use strict';

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

mongoose.connect('mongodb://localhost/coffees');

const roasterSchema = new Schema({
  coffeeBlends: [{
    type: Schema.Types.ObjectId,
    ref: 'coffee'
  }]
});

module.exports = mongoose.model('roaster', roasterSchema);