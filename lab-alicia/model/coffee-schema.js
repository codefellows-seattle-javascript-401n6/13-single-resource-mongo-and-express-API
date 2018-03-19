const mongoose = require('mongoose');
const {Schema} = mongoose;

const coffeeSchema = new Schema({
    origin: { type: String, required: true, unique: true},
    roast: { type: String, required: true },
    cost: { type: Number, required: true },
});

module.exports = mongoose.model('coffee', coffeeSchema);