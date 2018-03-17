'use strict';

const express = require('express');
const jsonParser = require('body-parser').json();
const createError = require('http-errors');

const Coffee = require('../model/coffee-schema.js');
const roasterSchema = require('../model/roaster-schema.js');
const storage = require('../lib/storage.js');

const router = express.Router();

// GET
// get all
router.get('/coffees', (req, res) => {
    Coffee.find()
    .then((coffees) => res.status(200).json(coffees))
    .catch(err => createError(404, err.message));
    });

// get one thing
router.get('/coffee/:id', (req, res) => {
    Coffee.findById(req.params.id)
        // .populate('items')
        .then((coffee) => res.status(200).json(coffee))
        .catch(err => createError(404, err.message));
});

// POST
router.post('/coffees', (req, res) => {
    console.log('request:', req.body);
    // req.body.timestamp = new Date();
    new Coffee(req.body).save()
        .then((coffee) => res.status(200).json(coffee))
        .catch(err => createError(404, err.message));
});

// PUT
router.put('/coffee/:id', (req, res) => {
    let id = req.params.id;
    Coffee.findByIdAndUpdate(req.params.id, req.body, {
            new: true
        })
        .then((coffee) =>
            res.status(200).json(coffee))
        .catch(err => {
            if (err.name === 'ErrorValidating') return (err);
            createError(404, err.message)
        })
});

// DELETE
router.delete('/coffee/:id', (req, res) => {
    Coffee.findByIdAndRemove(req.params.id)
        .then(() => {    
            console.log('Delete:', req.params.id)
            res.sendStatus(204)
        })
        .catch(err => createError(500, err.message))
});

module.exports = router;