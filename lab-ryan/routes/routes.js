'use strict';

const express = require('express');

const Norris = require('../model/model.js');

const storage = require('../lib/storage.js');
const router = express.Router();

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

router.post('/', (req,res) => {
    console.log('POST BODY: ', req.body);
    if(req.body.name === undefined || req.body.date === undefined){
        res.status(400);
        res.send('invlaid JSON request');
    } else {
        let chuckNorris = new Norris.Movies({
            name: req.body.name,
            date: req.body.date,
        });
        chuckNorris.save()
        .then(norris => {
            res.status(200);
            res.send(chuckNorris);
        });
    }
});

router.put('/', (req, res) => {
    let id = req.query.id;
    let norris = req.body;
    storage.update(id, norris)
    .then(norris => {
        res.send(norris);
    });
});

router.delete('/', (req, res) => {
    let id = req.query.id;
    storage.remove(id)
    .then(norris => {
        res.status(204);
        res.send(norris);
    });
});



module.exports = router;