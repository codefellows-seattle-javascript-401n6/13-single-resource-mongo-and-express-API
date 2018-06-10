'use strict';

const mongoose = require('mongoose');
const createError = require('http-errors');
const {Schema} = mongoose;

let teaSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  brand: {
    type: String,
  },
  price: {
    type: String,
    required: true,
  },
});

mondule.exports = mongoose.model('tea', teaSchema);


// const mongoose = require('mongoose');

// mongoose.connect('mongodb://localhost/mtg');

// let cardSchema = mongoose.Schema({
//   type: String,
//   color: String,
//   number: Number,
// });

// let handSchema = mongoose.Schema({
//   cards: [cardSchema]
// });

// handSchema.methods.total = function() {
//   let total = 0;
//   this.cards.forEach(card => {
//     total += card.number;
//   });
//   return total;
// }

// let Card = mongoose.model(`Card${cardSchema}`);
// let Hand = mongoose.model(`Hand${handSchema}`);

// let creature = new Card({type: 'creature', color:'blue', number: 1});
// let sorcery = new Card({type: 'sorcery', color:'green', number: 1});
// let instant = new Card({type: 'instant', color:'blue', number: 1});

// Promise.all([
//   creature.save(),
//   sorcery.save(),
//   instant.save()
// ])
//   .then(cards => {
//     let hand = new Hand({cards: cards});
//     return hand.save()
//   })
//   .then(currentHand => {
//     console.log(`Number of Cards in Hand: ${currentHand.total}`);
//   })
//   .then( () => {
//     mongoose.disconnect();
//   })
//   .catch((err) => {
//     console.log('Error', err);
//     mongoose.disconnect();
//   });

//   module.exports = {}