'use strict';

const express = require('express');
const senshiRouter = express.Router();
const jsonParser = require('body-parser').json();

const Senshi = require('../models/senshi.js');
const senshiMongoose = require('../models/senshiMongoose.js');
const mongoose = require('mongoose');

senshiRouter.get('/api/senshi/:senshiId', (req, res, next) =>{
  Senshi.findById(req.params.senshiId)
    .then(senshi => res.json(senshi))
    .catch(next);
});


senshiRouter.post('/api/list', jsonParser, (req, res, next) => {
  new Senshi(req.body).save()
  .then( list => res.json(list))
  .catch(next);
});
module.exports = senshiRouter;

