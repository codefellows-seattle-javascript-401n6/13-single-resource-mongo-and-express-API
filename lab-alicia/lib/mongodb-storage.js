const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/coffees');

const Coffee = require('../model/coffee');

function save(coffee) {
  let coffeeModel = new Coffee({
    origin: coffee.origin,
    roast: coffee.roast,
    cost: coffee.cost,
  })

  return new Promise(resolve, reject => {
    coffeeModel.save((err, savedCoffee) => {
      resolve(savedCoffee);
    })
  })
}

let get = (id) => {
  return new Promise((resolve, reject) => {
    Coffee.findOne({_id: id}, (err, coffees) => {
      resolve(coffees);
    })
  });
}
  
let getAll = () => {
  return new Promise((resolve, reject) => {
    Coffee.find((err, coffees) => {
      resolve(coffees);
    })
  });
}
  
let remove = (id) => {
  return new Promise((resolve, reject) => {
    Coffee.remove({_id: id}, (err, coffee) => {
      resolve(coffee);
    })
  });
}
  
let removeAll = () => {
  return new Promise((resolve, reject) => {
    Coffee.remove((err, coffees) => {
      resolve(coffees);
    })
  });
}
  
module.exports = {save, get, getAll, remove, removeAll};