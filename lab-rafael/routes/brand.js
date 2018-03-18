'use strict';

const express = require('express');
const router = express.Router();
const storage = require('../controllers/brands');
const Brand = require('../models/brand').Brand;

router.use((req, res, next) => {
  console.log('Some magic happening');
  next();
});

router.get('/', (req, res) => {
  res.json({ message: 'Hi there, this is car api' });
});

router
  .route('/brands')
  .post((req, res) => {
    console.log('POST', req.body);
    console.log(req.body.cars);

    let brand = new Brand({
      name: req.body.name,
      cars: req.body.cars || []
    });

    storage.create(brand).then(brand => {
      console.log('POST created');
      res.status(200);
      res.send(brand);
    });
  })

  .get((req, res) => {
    Brand.find((err, brands) => {
      if (err) {
        res.send(err);
      }
      res.json(brands);
    });
  });

router
  .route('/brand/:id')
  .get((req, res) => {
    let id = req.params.id;
    storage.get(id).then((err, brand) => {
      if (err) {
        res.send(err);
        return;
      }
      res.json(brand);
    });
  })

  .put((req, res) => {
    console.log('PUT');
    let id = req.params.id;

    storage.update(id, req.body).then((err, brand) => {
      console.log('PUT update');
      if (err) {
        res.send(err);
        return;
      }

      res.sendStatus(200).json([{ message: 'Brand updates' }, brand]);
    });
  })

  .delete((req, res) => {
    let id = req.params.id;
    Brand.findByIdAndRemove(id)
      .then(() => res.sendStatus(204))
      .catch(err => res.senStatus(500).send(err));
  });

module.exports = router;
