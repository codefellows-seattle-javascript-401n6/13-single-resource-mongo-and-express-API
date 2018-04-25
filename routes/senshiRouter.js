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

senshiRouter.get('/api/senshi', (req, res, next) =>{
  Senshi.find({})
    .then(senshi => res.json(senshi))
    .catch(next);
});

senshiRouter.post('/api/senshi', jsonParser, function (req, res, next){
  console.log('19 body',req.body);
  new Senshi(req.body).save()
  .then( senshi => res.json(senshi))
  .catch(next);
});

//upsert boolean creats new doc if no doc matchs the filter 
// updates single doc if it matches the filter 
senshiRouter.put('/api/senshi/:senshiId', (req, res, next) =>{
  Senshi.findOneAndUpdate(req.params.senshiId, req.body, {upsert:true})
  .then( senshi => res.json(senshi))
  .catch(next);
});

senshiRouter.put('/api/senshi/:senshiId', (req, res, next) =>{
  Senshi.findOneAndUpdate(req.params.senshiId, req.body, {upsert:true})
  .then( senshi => res.json(senshi))
  .catch(next);
});


senshiRouter.delete('/api/senshi/:senshiId', (req, res, next) =>{
  Senshi.findByIdAndRemove(req.params.id)
  .catch(next);
});
Senshi.findByIdAndRemove()