const express = require('express');
const router = express.Router();
const Manufacturer = require('../models/Manufacturer');

router.get('/', (req, res) => {
  Manufacturer.find()
    .then(manufacturers => res.json(manufacturers))
    .catch(err => res.send(err))
});

router.post('/', (req, res) => {
  Manufacturer.create(req.body)
    .then(manufacturer => res.json(manufacturer))
    .catch(err => res.send(err));
});

router.put('/:_id', (req, res) => {
  Manufacturer.findByIdAndUpdate(req.params._id, req.body)
    .then(manufacturer => res.json(manufacturer))
    .catch(err => res.send(err))
})

router.delete('/:_id', (req, res) => {
  Manufacturer.findByIdAndRemove(req.params._id, { new: true})
    .then(manufacturer => res.json({ success: true, message: 'deleted document'}))
})

module.exports = router;