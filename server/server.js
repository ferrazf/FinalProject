"use strict";

require('dotenv').config();

const PORT            = process.env.PORT || 8080;
const ENV             = process.env.ENV || "development";
const express         = require("express");
const bodyParser      = require("body-parser");
const app             = express();

const knexConfig      = require("./knexfile");
const knex            = require("knex")(knexConfig[ENV]);
const morgan          = require('morgan');
const knexLogger      = require('knex-logger');

// Seperated Routes for each Resource
const indexRoutes     = require("./routes/index");
const usersRoutes     = require("./routes/users");
const exercisesRoutes = require("./routes/exercises");
const musclesRoutes   = require("./routes/muscles");
const workoutsRoutes  = require("./routes/workouts");

//==========================================
// app.use
//==========================================
// Load the logger first so all (static) HTTP requests are logged to STDOUT
// 'dev' = Concise output colored by response status for development use.
//         The :status token will be colored red for server error codes, yellow for client error codes, cyan for redirection codes, and uncolored for all other codes.
app.use(morgan('dev'));

// Log knex SQL queries to STDOUT as well
app.use(knexLogger(knex));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header('Access-Control-Allow-Methods', 'GET, HEAD, PUT, POST, DELETE, OPTIONS');
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, Authorization, access-control-allow-origin");
  // res.header("Access-Control-Expose-Headers", "*");
  next();
});

//==========================================
// Mount all resource routes
//==========================================
app.use("/api/users", usersRoutes(knex));
app.use("/api/exercises", exercisesRoutes(knex));
app.use("/api/muscles", musclesRoutes(knex));
app.use("/api/workouts", workoutsRoutes(knex));
app.use("/api/", indexRoutes(knex));

//==========================================
// listeners
//==========================================
app.listen(PORT, () => {
  console.log("Example app listening on port " + PORT);
});
