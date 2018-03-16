'use strict';

const express = require('express');
const app = express();

const bodyParser = require('body-parser');
app.use(bodyParser.json());

const routes = require('./route/coffee-route.js');
app.use(routes);

const mongoose = require('mongoose');
const MONGODB_URI = process.env.MONGODB_URI || 'mongdob:/localhost/coffee';

mongoose.connect(MONGODB_URI);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`listening on ${PORT}`);
});