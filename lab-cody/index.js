'use strict';

const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const seeder = require('./lib/seeder');
const storage = require('./lib/storage');

seeder.seed(storage);

const app = express();

const routes = require('./routes/routes');


app.use(bodyParser.json());


app.use('/api/beerfridge', routes); 



let PORT =process.env.PORT || 3000;
app.listen(PORT, () =>{
    console.log('http://localhost:' + PORT);
}); 