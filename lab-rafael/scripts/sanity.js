const Brand = require('../models/brand').Brand;
const Car = require('../models/brand').Car;

let car = new Car({ model: 'Pickup', year: 1989 });

let brand = new Brand({
  name: 'brandname ' + Math.random(),
  cars: [car]
});

brand.save().then(brand => {
  console.log(brand);
  require('mongoose').disconnect();
});
