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
        // console.log('director', director);
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
    return Movie.findOne({_id: id}).then(movie => {
      console.log(' get movie function', movie);
      resolve(movie);
    });
  });
}

function getAll() {
  return new Promise((resolve, reject) => {
    Movie.find((err, movie) => {
      resolve(movie);
    });
  });
}

function remove(id) {
  return new Promise((resolve, reject) => {
    Director.remove({_id: id}, (err, director) => {
      resolve(director);
    });
  });
}

function removeAll() {
  return new Promise((resolve, reject) => {
    Director.remove((err, director) => {
      resolve(director);
    });
  });
}

module.exports = {seed, save, get, getAll, remove, removeAll};