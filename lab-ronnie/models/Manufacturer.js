const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const robotSchema = require('./Robot').robotSchema;

const manufacturerSchema = new Schema({
  name: {
    type: String, 
    required: function() {
      return this.name.length > 3;
    }
  },
  robots: [robotSchema]
})

manufacturerSchema.methods.total = () => {
  return this.robots.length;
}

module.exports = mongoose.model('Manufacturer', manufacturerSchema);