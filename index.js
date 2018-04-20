'use strict'
const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;
const senshiRouter = require('./routes/senshiRouter.js')
const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/lab13resubmit');

app.use('/api/senshi', senshiRouter);


app.listen(PORT,() =>{
    console.log('http://localhost:'+ PORT);
});

