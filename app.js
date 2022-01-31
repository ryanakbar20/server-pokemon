var express = require("express");
var path = require("path");
var cookieParser = require("cookie-parser");
var logger = require("morgan");

var indexRouter = require("./routes/index");
var usersRouter = require("./routes/users");

const mongoose = require("mongoose");

mongoose
  .connect(
    "mongodb+srv://ryanakbar20:Pitathaeng123@cluster0.p5zqo.mongodb.net/pokemon-db?retryWrites=true&w=majority"
    // "mongodb://localhost:27017"
    // "mongodb+srv://ryanakbar:<password>@cluster0.7ontv.gcp.mongodb.net"
  )
  .then(() => console.log("success connect mongoDB"))
  .catch((error) => console.log(error));

var app = express();

app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));

app.use("/api/v1", indexRouter);
app.use("/users", usersRouter);

module.exports = app;
