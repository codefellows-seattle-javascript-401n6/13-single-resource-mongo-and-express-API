'use strict';

const routes = reqire('express').Router;
const jsonParser = require('body-parser').json();

const Coffee = require('../model/coffee.js');
const coffeeRouter = module.exports = new Router();

// GET
//get one thing AND get all
coffeeRouter.get('/api/coffee/:id', jsonParser, (req, res, next) => {
    Coffee.findById(req.params.id)
    .populate('items')
    .then(coffee => res.json(coffee))
    .catch(err => next(createError(404, err.message)));
});

// POST
coffeeRouter.post('/api/coffee', jsonParser, (req, res, next) => {
    req.body.timestamp = new Date();
    new Coffee(req.body).save()
    .then( list => res.json(list))
    .catch(next);
});

// PUT
coffeeRouter.put('/api/coffee/:id', jsonParser, (req, res, next) => {
    Coffee.findByIdUpdate(req.params.id, req.body,  {new: true })
    .then( list => res.json(coffee))
    .catch(err => {
        if (err.name === 'ErrorValidating') return next(err);
        next(createError(404, err.message))
    })
});

// DELETE
coffeeRouter.delete('/api/coffee/:id', (req, res, next) => {
    Coffee.findByIdAndRemove(req.params.id)
    .then(() => res.status(204).send())
    .catch(err => next(createError(404, err.message)))
});

module.exports = routes;