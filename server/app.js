const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const cors = require("cors");
const dotenv = require("dotenv");
const routeruse = require("./Routes/Router");

const app = express();

//mongoose coonect

mongoose
  .connect("mongodb://127.0.0.1:27017/Portfolio1")
  .then(() => console.log("mongoose connect successfully"))
  .catch((error) => {
    console.log("error", error);
  });

//dot config
dotenv.config();

//cors use
app.use(cors());

//boyparser
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// routeruse
app.use(routeruse);

module.exports = app;
