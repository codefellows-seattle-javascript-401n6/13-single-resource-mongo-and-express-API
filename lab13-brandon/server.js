'use strict';

const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const storage = require('./lib/storage/mongoStorage.js');

const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/movies');

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

const PORT = process.env.PORT || 3000;

const router = express.Router();

storage.seed(storage);

router.use((req, res, next) => {
  console.log('something is happening');
  next();
});

const routes = require('./routes/movieRoute.js');
app.use('/api', routes);

app.listen(PORT, () => {
  console.log(`Listening in at http://localhost:${PORT}.`);
}); 