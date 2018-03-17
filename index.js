'use strict';

const mongoose = require('mongoose');
mongoose.connect('');


let dollSchema = new mongoose.Schema({
  name: String,
  layers: number,
});

let matryoshkaSchema = new mongoose.Schema({
  dolls : [dollSchema]
});

matryoshkaSchema.methods.largest = function() {
  let largest = 0;
  this.dolls.forEach(dolls => {
    if(largest <= dolls.layers){
      largest = elem;
    }
  });
  return largest;
};

let Doll = mongoose.model('Doll', dollSchema);
let Matryoshka = mongoose.model('Matryoshka', matryoshkaSchema)