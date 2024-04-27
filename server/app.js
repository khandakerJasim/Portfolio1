const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const cors = require("cors");
const dotenv = require("dotenv");
const useRouter = require("./Routes/Router");
//const server = require("http").createServer();
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
app.use(useRouter);

//error handlinhg
// app.use((req, res, next) => {
//   res.setHeader("Access-Control-Allow-Origin", "*");
//   res.setHeader("Access-Control-Allow-Credentials", "true");
//   res.setHeader("Access-Control-Max-Age", "1800");
//   res.setHeader("Access-Control-Allow-Headers", "content-type");
//   res.setHeader(
//     "Access-Control-Allow-Methods",
//     "PUT, POST, GET, DELETE, PATCH, OPTIONS"
//   );
//   next();
// });

module.exports = app;
