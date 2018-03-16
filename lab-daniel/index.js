'use strict'
const express = require('express');
const fs = require('fs');
const bodyParser = require('body-parser');
const PORT = process.env.PORT || 3000;

const app = express();

app.listen(PORT, () => {
    console.log(`localhost://${PORT}`);
});