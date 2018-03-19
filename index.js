'use strict';

const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017');


let dollSchema = new mongoose.Schema({
  name: String,
  order: Number,
  
});

let matryoshkaSchema = new mongoose.Schema({
  dolls : [dollSchema],
  layers: Number,
});

// matryoshkaSchema.methods.layers = function() {
//   let layers = 0;
//   this.dolls.forEach(() => {
//     layers = layers ++;
//   });
//   return layers;
// };

// matryoshkaSchema.methods.placement = function(){
//   let placement = [dolls.length];
  
//   this.dolls.forEach(() =>{
//     if (placement.length <= 0){
//       this.order 

//     }
//   });
// };

let Doll = mongoose.model('Doll', dollSchema);
let Matryoshka = mongoose.model('Matryoshka', matryoshkaSchema);

let moira = new Doll({name:'Moira', order: 1});
let yulia = new Doll({name:'Yulia', order: 2});


Promise.all([
  moira.save(),
  yulia.save()
])
  .then(dolls => {
    let matryoshka  = new Matryoshka({dolls: dolls});
    return matryoshka.save();
  })
  .then(savedMatryoshka => {
    console.log('Matryoshka:', savedMatryoshka);
  })
  .then(() => {
    mongoose.disconnect();
  })
  .catch((err) => {
    console.log('Error', err);
    mongoose.disconnect();
  });