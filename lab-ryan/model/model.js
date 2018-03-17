'use strict';

const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/norris');

let chuckNorrisSchema = mongoose.Schema({
    name: String,
    movie: {movieSchema},
});

let movieSchema = mongoose.Schema({
    name: {type: String, required: true, unique: false},
    date: {type: Number, required: true, unique: false},
});

let Norris = mongoose.model('Norris', chuckNorrisSchema);
let Movies = mongoose.model('Movies', movieSchema);


module.exports = {Norris, Movies};