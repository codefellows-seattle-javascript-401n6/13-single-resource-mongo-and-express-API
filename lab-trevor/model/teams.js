

const mongoose = require('mongoose');

let teamSchema = mongoose.Schema({
    location: String,
    mascot: String,
    division: String,
});

let nflSchema = mongoose.Schema({
    league: [teamSchema],
});

let Team = mongoose.model('Team', teamSchema);
let Nfl = mongoose.model('Nfl', nflSchema);

module.exports = {Team, Nfl};