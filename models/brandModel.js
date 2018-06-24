'use strict';

const mongoose = require('mongoose');
const {Schema} = mongoose;

const brandSchema = new Schema({
  plants: [{
    type: Schema.Types.ObjectId,
    ref: 'tea',
  }],
});

brandSchema.methods.total = () => {
  let total = 0;
  this.plants.forEach(tea => {
    total += tea.brand;
  });
  return total;
};

module.exports = mongoose.model('brand', brandSchema);