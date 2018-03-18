'use strict';

const express = require('express');
const url = require('url');
const querystring = require('querystring');

const router = express.Router();

const storage = require('../lib/storage/mongoStorage');
const Movie = require('../models/movie.js');
const Director = require('../models/director.js');

//get request to get all directors which have movies the attached, then work on POST, PUT and delete, then the methods in mongoStorage need to be refactored.

// GET request
// should pass the id of a resource through the url endpoint to get a resource
router.get('/', (req, res) => {
  req.url = url.parse(req.url);
  req.url.query = querystring.parse(req.url.query);
  if (req.url.query.id) {
    let id = req.url.query.id;
    storage.get(id)
      .then(Director => {
        // console.log('Director', Director);
        res.status(200);
        res.send(JSON.stringify(Director));
      });
  } else {
    storage.getAll()
      .then(Director => {
        res.status(200);
        res.send(JSON.stringify(Director));
      });
  } 
});

// Put request /api/movies?id=_id title||genre||rating -> updates a movie
router.put('/', (req, res) => {
  console.log('req.body', req.body);
  let id = req.query.id;
  console.log('id', id);
  storage.get(id)
    .then(movie => {
      console.log('movie', movie);
      if (req.body.title) {
        movie.title = req.body.title;
      }
      if (req.body.rating) {
        movie.rating = req.body.rating;
      }
      movie.save((err, movie) => {
        res.send(JSON.stringify(movie));
      });
    });
});

router.post('/', (req, res) => {
  if (req.body.title === undefined || req.body.rating === undefined) {
    res.status(400);
    res.send('bad request'); 
  } else {
    let director = {
      title: req.body.title,
      rating: req.body.rating,
    };
    // saves the movie to the database
    storage.save(director)
      .then(director => {
        res.status(200);
        res.send(JSON.stringify(director));
      });
  }
});

// DELETE request
// should pass the id of a resource though the url endpoint to delete a resource
// DELETE /api/movies?id=<_id> -> deletes a movie with that id
router.delete('/', (req, res) => {
  if (req.query.id) {
    storage.remove(req.query.id).then((results) => {
      res.status(204).res.send('Movie deleted successfully');
    });
  } else {
    storage.removeAll().then((results) => {
      res.send('All movies deleted successfully');
    });
  }
});

module.exports = router;