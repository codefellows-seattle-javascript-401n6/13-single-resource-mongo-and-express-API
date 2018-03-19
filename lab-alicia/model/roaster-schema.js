const mongoose = require('mongoose');
const {Schema} = mongoose;

const roasterSchema = new Schema({
    coffeeBlends: [{
        type: Schema.Types.ObjectId,
        ref: 'coffee'
    }]
});

roasterSchema.methods.total = () => {
    let total = 0;
    this.coffeeBlends.forEach(coffee => {
        total += coffee.roast;
    });
    return total;
};

module.exports = mongoose.model('roaster', roasterSchema);