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










module.exports = router;