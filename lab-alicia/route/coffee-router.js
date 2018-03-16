'use strict';

const express = require('express');
const jsonParser = require('body-parser').json();

const Coffee = require('../model/coffee.js');
const storage = require('../lib/storage.js');

const router = express.Router;

// GET
// get one thing AND get all
router.get('/:id', (req, res, next) => {
    Coffee.findById(req.params.id)
        .populate('items')
        .then((coffee) => res.status(200).send('get request successful'))
        .catch(err => next(createError(404, err.message)));
});

// POST
router.post('/', jsonParser, (req, res, next) => {
    req.body.timestamp = new Date();
    new Coffee(req.body).save()
        .then((coffee) => res.status(200).send('post successful'))
        .catch(next);
});

// PUT
router.put('/:id', jsonParser, (req, res, next) => {
    Coffee.findByIdUpdate(req.params.id, req.body, {
            new: true
        })
        .then((coffee) =>
            res.status(200).send('update successful'))
        .catch(err => {
            if (err.name === 'ErrorValidating') return next(err);
            next(createError(404, err.message))
        })
});

// DELETE
router.delete('/:id', (req, res, next) => {
    Coffee.findByIdAndRemove(req.params.id)
        .then(() => res.status(204).send('delete successful'))
        .catch(err => next(createError(404, err.message)))
});

module.exports = router;