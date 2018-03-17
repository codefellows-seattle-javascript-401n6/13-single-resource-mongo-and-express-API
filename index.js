'use strict';

const mongoose = require('mongoose');
mongoose.connect('');


let dollSchema = new mongoose.Schema({
  name: String,
  order: number,
  
});

let matryoshkaSchema = new mongoose.Schema({
  dolls : [dollSchema],
  layers: number,
});

matryoshkaSchema.methods.layers = function() {
  let layers = 0;
  this.dolls.forEach(() => {
    layers = layers ++;
  });
  return layers;
};

let Doll = mongoose.model('Doll', dollSchema);
let Matryoshka = mongoose.model('Matryoshka', matryoshkaSchema);

let moira = new Doll({name:'Moira', order})