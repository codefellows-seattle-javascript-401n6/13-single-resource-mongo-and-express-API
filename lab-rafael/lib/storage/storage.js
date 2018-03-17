const mongodb = require('./mongodb-storage');
const Car = require('../../models/car').Car;
const Brand = require('../../models/car').Brand;

function seed(storage) {
  return storage.removeAll()
    .then(() => {
      return Promise.all([
        storage.save(new Car({model: 'Model S', year: '2015'})),
        storage.save(new Car({model: 'Model X', year: '2017'})),

        storage.save(new Brand({name: 'Tesla'}));
      ])
    })
}

module.exports = { mongodb, seed }
