'use strict';

const Router = require('express').Router;
const jsonParser = require('body-parser').json();
const Senshi = require('../models/senshi.js');
const senshiRouter = module.exports = new Router();

senshiRouter.get('/api/senshi/:senshiId', (req, res, next) =>{
  Senshi.findById(req.params.senshiId)
    .then(senshi => res.json(senshi))
    .catch(next);
});


senshiRouter.post('/api/senshi', jsonParser, function (req, res, next){
  console.log('19 body',req.body);
  new Senshi(req.body).save()
  .then( senshi => res.json(senshi))
  .catch(next);
});


