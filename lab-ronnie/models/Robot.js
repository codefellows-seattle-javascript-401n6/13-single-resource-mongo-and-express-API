const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const robotSchema = new Schema({
  name: { type: String, required: true },
  purpose: { type: String, required: true },
  age: { type: Number, min: 1, max: 99 }
});

const Robot = mongoose.model('Robot', robotSchema);
module.exports = { robotSchema, Robot }