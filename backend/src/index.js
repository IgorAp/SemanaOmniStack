const express = require('express');
const mongoose = require('mongoose');
require('dotenv/config');

const app = express();

const routes = require('./routes');

const options = {
  user: process.env.DB_USER,
  pass: process.env.DB_PASS
}

mongoose.connect('mongodb://localhost:27017/omnistack?authSource=admin'
,options);
const db = mongoose.connection;

app.use(express.json());
app.use(routes);

app.listen(3000, () => {
    console.log("API is running");
});