'use strict';

const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/movies');

const Movie = require('../../models/director.js').Movie;
const Director = require('../../models/director.js').Director;

function seed(storage) {
  return storage.removeAll()
    .then(() => {
      return Promise.all([
        storage.save(new Movie({title: 'There\s Something About Mary', rating: 7.1})),
        storage.save(new Movie({title: 'Kingpin', rating: 6.9})),
        storage.save(new Movie({title: 'Dumb and Dumber', rating: 7.3}))
      ]).then(movies => {
        return new Director({director: 'Farrelly Brothers', movies: movies }).save();
      }).then(director => {
        console.log('director', director);
      }); 
    });
}

//this handles just saving the movie title and rating not director
function save(movie) {
  let movieModel = new Movie({
    title: movie.title,
    rating: movie.rating,
  });

  return new Promise((resolve, reject) => {
    movieModel.save((err, savedMovie) => {
      resolve(savedMovie);
    });
  });
}

function get(id) {
  return new Promise((resolve, reject) => {
    Movie.findOne({_id: id}, (err, movies) => {
      if(err) {
        console.log('error', err);
      }
      console.log('Movies', movies);
      resolve(movies);
    });
  });
}

function getAll() {
  return new Promise((resolve, reject) => {
    Movie.find((err, movies) => {
      resolve(movies);
    });
  });
}

function remove(id) {
  return new Promise((resolve, reject) => {
    Movie.remove({_id: id}, (err, movie) => {
      resolve(movie);
    });
  });
}

function removeAll() {
  return new Promise((resolve, reject) => {
    Movie.remove((err, movies) => {
      resolve(movies);
    });
  });
}

module.exports = {seed, save, get, getAll, remove, removeAll};