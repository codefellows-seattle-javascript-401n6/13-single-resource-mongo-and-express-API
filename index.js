'use strict';
const express = require('express');
const morgan = require('morgan');
const cors = require('cors');
const mongoose = require('mongoose');
const senshiRouter = require('./routes/senshiRouter.js');

const app = express();
const PORT = process.env.PORT || 3000;
mongoose.connect('mongodb://localhost/lab13resubmit');

app.use(cors());
app.use(morgan('dev'));
app.use(senshiRouter);


app.listen(PORT, () => console.log(`http//localhost:${PORT}`));

