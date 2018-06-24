'use strict';

const express = require('express');
const bodyParser = require('body-parser');

const routes = require('./routes/route.js');

const app = express();

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

app.use('/api', routes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`listening on PORT: ${PORT}`);
});