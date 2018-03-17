const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/test');

const Team = require('../model/teams.js').Team;
const Nfl = require('../model/teams.js').Nfl;

function save(teamModel){
    return new Promise ((resolve, reject) => {
      teamModel.save((err, savedTeam) => {
          resolve(savedTeam)
      })  
    })
}

function remove(id) {
    console.log('delete beginning')
    return new Promise((resolve, reject) => {
        Team.remove({_id: id}, (err, team) => {
            resolve(team);
            console.log('delete complete')
        })
    })
}

function removeAll(){
    return new Promise ((resolve, reject) => {
        Team.remove((err, teams) => {
            resolve(teams);
        })
        Nfl.remove((err, league) => {
            resolve(league);
        })
    })
}
function get(id){
    return new Promise((resolve, reject) => {
        Team.findOne({_id: id}, (err, teams) => {
            resolve(teams)
        })
    })
}
    
module.exports = {save, Team, get, removeAll, remove, Nfl}


