'use strict';

const express = require('express');
const app = express();

const bodyParser = require('body-parser');
app.use(bodyParser.json());

const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/');

// const seeder = require('./lib/seeder.js');
const storage = require('./lib/storage.js');

const routes = require('./routes/routes.js');

seeder.seed(storage);

app.use('/api/norris', routes);

const PORT = process.env.PORT || 3000;
server.listen(PORT, () => {console.log('listening on: http://localhost:' + PORT)});