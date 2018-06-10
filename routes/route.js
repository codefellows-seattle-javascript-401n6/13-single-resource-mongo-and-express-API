'use strict';

const express = require('express');
const bodyParser = require('body-parser');
const createError = require('http-errors');

const Tea = require('../model/tea');
const storage = require('../lib/storage');

const router = express.Router();

router.get('/teas', (request, response) => {
  Tea.find()
    .then((teas) => {
      response.status(200).json(teas);
    })
    .catch(error => {
      response.send(createError(404, error.message));
    });
});

router.post('/teas', (request, response) => {
  new Tea(request.body).save()
    .then((tea) => {
      response.status(200).json(tea);
    })
    .catch(error => {
      response.send(createError(404, error.message));
    });
});

router.put('/tea/:id', (request, response) => {
  let id = request.params.id;
  console.log('request: ', id);
  Tea.findByIdAndUpdate(request.params.id, request.body, {
    new: true,
  })
    .then((tea) => {
      response.status(204).json(tea);
    })
    .catch(error => {
      response.status(createError(404, error.message));
    });
});

router.delete('/tea/:id', (request, response) => {
  Tea.findByIdAndRemove(request.params.id)
    .then(() => {
      response.sendStatus(204);
    })
    .catch(error => {
      response.send(createError(500, error.message));
    });
});

module.exports = router;