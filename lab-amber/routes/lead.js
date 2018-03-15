'use strict';

const express = require('express');
const mongoose = require('mongoose');

const Lead = require('../models/lead.js');
const storage = require('../lib/storage.js');

const router = express.Router();

router.get('/leads', (req, res) => {
  if (req.query.id) {
    let id = req.query.id;
    storage.get(id)
    .then(lead => {
      let expired = lead.isExpired();
      let reply = {
        lead,
        expired,
      }
      res.send(reply);
      // mongoose.disconnect();
    })
    .catch(err => {
      console.error(err);
      // mongoose.disconnect();
    });
  } else {
    storage.getAll()
    .then(leads => {
      res.send(leads);
    })
    .then(() => {
      // mongoose.disconnect();
    })
    .catch(err => {
      console.error(err);
      // mongoose.disconnect();
    });
  }
});

router.post('/leads', (req, res) => {
  storage.save(req.body)
  .then(lead => {
    res.status(200);
    res.send(lead);
    // mongoose.disconnect();
  })
  .catch(err => {
    console.error(err);
    // mongoose.disconnect();
  });
});

router.put('/leads', (req, res) => {
  storage.update(req.query.id, req.body)
  .then(lead => {
    res.status(200);
    res.send('updated successfully');
    // mongoose.disconnect();
  })
  .catch(err => {
    console.error(err);
    // mongoose.disconnect();
  });
});

router.delete('/leads', (req, res) => {
  storage.remove(req.query.id)
  .then(project => {
    res.status(204);
    res.send('deleted successfully');
    // mongoose.disconnect();
  })
  .catch(err => {
    console.error(err);
    // mongoose.disconnect();
  });
});

module.exports = router;