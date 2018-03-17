'use strict';

const express = require('express');

const Norris = require('../model/norris');

const storage = require('../lib/storage');
const router = express.router();

router.get('/', (req, res) => {
    if (req.query.id){
        let id = req.query.id;
        storage.get(id)
        .then(norris => {
            console.log('norris', norris);
            res.send(norris);
        });
    } else {
        storage.getAll()
        .then(norris => {
            res.send(norris);
        });
    }
});