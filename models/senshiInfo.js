'use strict'
const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/sailorSenshiTwo');

let isSenshi = ['Inner Senshi', 'Outer Senshi', 'Fucture Senshi', 'Sovereign of Earth'];
let AttackSchema = new mongoose.Schema({
    attackName: String,
    type:String
})
let senshiSchema = mongoose.Schema({
    senshiName: String, 
    name:String, 
    power: String,
    evil: {
        type: String,
        required: [false, 'True Senshi cannot be evil!']
    }, 
    rank:{
        type: String,
        enmu: isSenshi
    },
    attack:[AttackSchema],
    age:{
        type: Number,
        validate: {
            message:'Senshi stop ageing at 25',
            validator: function(num) {
              if(num < 25)return;
            }
        }
    }
});

const Senshi = mongoose.model('senshi', senshiSchema);
const Attack = mongoose.model('attack', AttackSchema);

let sailorMercury = new Senshi({ senshiName: 'Sailor Mercury', name: 'Ami Mizuno', power: 'Intelligence/Water Magic', evil:false, rank: 'Inner Senshi' })
let mecuryAttack = new Attack({ attackName: 'Mercury Aqua Mirage', type: 'Water'});

let Mercury = new Senshi({attack: mecuryAttack});
Mercury.save()
.then(Mercury => {
console.log('Sailor Mercury:', Mercury);
mongoose.disconnect();
});

module.exports = Senshi;