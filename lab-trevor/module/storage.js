const db = require('./db-storage');
const Team = require('../model/teams').Team;
const Nfl = require('../model/teams').Nfl;

function seed(storage){
    return db.removeAll()
    .then(() => {
        return Promise.all([
            db.save(new Team({location: 'Chicago', mascot:  'Bears', division: 'NFC North'})),
            db.save(new Team({location: 'Minneapolis', mascot:  'Vikings', division: 'NFC North'})),
            db.save(new Team({location: 'Green Bay', mascot:  'Packers', division: 'NFC North'})),
            db.save(new Team({location: 'Detroit', mascot:  'Lions', division: 'NFC North'})),
            db.save(new Team({location: 'Seattle', mascot:  'Seahawks', division: 'NFC West'})),
            db.save(new Team({location: 'San Francisco', mascot:  '49ers', division: 'NFC West'})),
            db.save(new Team({location: 'Arizona', mascot:  'Cardinals', division: 'NFC West'})),
            db.save(new Team({location: 'Los Angeles', mascot:  'Rams', division: 'NFC West'})),
        ])
    })
    .then(league => {
        let leagueModel = new Nfl({league: league});
        console.log(leagueModel)
        return leagueModel.save();
    })
}

module.exports = {seed, Team, Nfl, db};