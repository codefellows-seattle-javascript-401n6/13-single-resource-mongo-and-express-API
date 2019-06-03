const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const robotRouter = require('./routes/robots');
const manufacturerRoutes = require('./routes/manufacturers');

mongoose.connect('mongodb://localhost/robots');

const app = express();
app.use(bodyParser.urlencoded({ extended: true}));
app.use(bodyParser.json());

app.use('/api/robots', robotRouter);
app.use('/api/manufacturers', manufacturerRoutes);

app.get('/', (req, res) => {
  res.send('hello')
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`);
});

