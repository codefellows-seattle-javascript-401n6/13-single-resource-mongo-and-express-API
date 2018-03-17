const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
mongoose.connect('mongod://localhost/');




const PORT = process.env.PORT || 3000;
server.listen(PORT, () => console.log('listening on: http://localhost:' + PORT));
