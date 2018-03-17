'use strict';

const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/');

let chuckNorrisSchema = mongoose.Schema({
    name: String,
    movie: {movieSchema},
});

let movieSchema = mongoose.Schema({
    name: {type: String, required: true, unique: false},
    date: {type: Number, required: true, unique: false},
});

// chuckNorrisSchema.methods.create = function() {
//     let CNmovies = 
// };

let Movie = mongoose.model('Movie', movieSchema);

let Noris = mongoose.model('Noris', chuckNorrisSchema);

let deltaForce = new Movie({name: 'Delta Force', date: 1986});
let loneWolf = new Movie({name: 'Lone Wolf McQuade', date: 1983});
let octagon = new Movie ({name: 'The Octagon', date: 1980});

Promise.all([
    deltaForce.save(),
    loneWolf.save(),
    octagon.save(),
])
.then()

module.exports = Norris;