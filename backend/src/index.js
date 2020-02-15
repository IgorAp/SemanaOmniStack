const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

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

app.use(cors());
app.use(express.json());
app.use(routes);

app.listen(3333, () => {
    console.log("API is running");
});