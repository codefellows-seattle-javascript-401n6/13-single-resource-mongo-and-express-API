const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/orm');

let fruitSchema = new mongoose.Schema({
  name: String,
  cost: Number,
});

let veggieSchema = new mongoose.Schema({
  items: [itemSchema]
});

veggieSchema.methods.total = function() {
  let total = 0;
  this.items.forEach(item => {
    total += item.cost;
  });
  return total;
}

let Fruit = mongoose.model('Fruit', fruitSchema);
let Veggie = mongoose.model('Veggie', veggieSchema);

let apples = new Item({name: 'Apples', cost: 199});
let carrots = new Item({name: 'Carrots', cost: 500});
let oranges = new Item({name: 'Oranges', cost: 299});

Promise.all([
  apples.save(),
  carrots.save(),
  oranges.save(),
])
.then(items => {
  let bag = new Bag({items: items});
  return bag.save()
})
.then(savedBag => {
  console.log("Bag:", savedBag);
  console.log("Total cost:", savedBag.total());
})
.then(() => {
  mongoose.disconnect();
})
.catch((err) => {
  console.log('Error', err);
  mongoose.disconnect();
});