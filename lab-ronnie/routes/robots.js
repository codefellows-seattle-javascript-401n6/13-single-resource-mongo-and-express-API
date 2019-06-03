const express = require('express');
const router = express.Router();
const Robot = require('../models/Robot').Robot;

router.get('/', (req, res) => {
  Robot.find()
    .then(robots => res.json(robots))
    .catch(err => res.send(err));
});

router.post('/', (req, res) => {
  Robot.create(req.body)
   .then(robot => res.json(robot))
   .catch(err => res.send(err));
});

router.put('/:_id', (req, res) => {
  Robot.findByIdAndUpdate(req.params._id, req.body, { new: true})
    .then(robot => res.json(robot))
    .catch(err => res.send(err))
})

router.delete('/:_id', (req, res) => {
  Robot.findByIdAndRemove(req.params._id)
    .then(robot => res.json({ success: true, message: 'deleted document'}))
})

module.exports = router;