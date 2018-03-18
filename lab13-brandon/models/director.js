'use strict';

var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var movieSchema = new Schema({
  title: String,
  rating: Number,
  director: String,
});

var directorSchema = new Schema({
  director: String,
  movies: [ movieSchema ],
});

let Movie = mongoose.model('Movie', movieSchema);
let Director = mongoose.model('Director', directorSchema);
module.exports = { Movie, Director };
