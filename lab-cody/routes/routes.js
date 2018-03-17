'use strict';

const express = require('express');

const Fridge = require('../models/model');

const storage = require('../lib/storage');
const router = express.Router();



router.get('/', (req, res) => {
    if (req.query.id) {
        let id = req.query.id;
        storage.get(id)
        .then(fridge => {
            console.log('fridge', fridge);
            res.send(fridge);
        });
    }else{
        storage.getAll()
        .then(fridge => {
            res.send(fridge);  
        });
    }
});

router.post('/', (req, res) => {
    console.log('req.body', req.body);
    if (req.body.name === undefined ||
    req.body.ammount === undefined) {
        res.status(400);
        res.send('valid JSON please');
    }else{
    let brews = new Fridge.Beers({
      name: req.body.name,
      ammount: req.body.ammount,
      
    });
    brews.save()
    .then(brews => {
      res.status(200);
      res.send(brews);
    });
    }
  });


  router.put('/', (req, res) => {
    let id = req.query.id;
    let beer = req.body;
    storage.update(id, beer)
    .then(beer => {
        res.send(beer);
    });
  });


router.delete('/', (req, res) => {
    let id = req.query.id;
    storage.remove(id)
    .then(fridge => {
        res.status(204);
        res.send(fridge);
    });
});










module.exports = router;