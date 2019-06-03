"use strict";

const express = require('express');
const router  = express.Router();

module.exports = (knex) => {
  const middleware  = require('../middleware/index')(knex);
  const helpers     = require('../helpers/exercises')(knex);

  // exercises
  router.route("/")
        .get(helpers.getExercises)

  router.route("/")
        .post(helpers.createExercise)

  return router;
}
