'use strict'
const express = require('express');
const fs = require('fs');
const bodyParser = require('body-parser');
const app = express();
const PORT = process.env.PORT || 3000;

//mongoose DB connection
const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/27017');

//import files
const Cars = require('./model/car.js');
const Router = require('./routes/routes.js');

app.use(bodyParser.json());
app.use('/api/cars', Router);

//check for port
app.listen(PORT, () => {
    console.log(`localhost://${PORT}`);
});