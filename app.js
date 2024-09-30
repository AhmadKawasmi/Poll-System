const express = require('express');
const mongoose = require('mongoose');
const userRoutes = require('./routes/userRoutes.js');
const authRoutes = require('./routes/authRoutes.js');
const cookieParser = require('cookie-parser');

const app = express();

app.use(express.static('public'));
app.use(express.json());
app.use(cookieParser());

const PORT = 3000;
const MONGO_URL = "mongodb://localhost:27017/local"

mongoose
  .connect(MONGO_URL)
  .then(() => console.log("connected to database"));


  app.listen(PORT, function () {
    console.log("Up and running on port " + PORT);
  });

  app.use(authRoutes);