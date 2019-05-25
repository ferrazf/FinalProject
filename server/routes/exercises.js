"use strict";

const express = require('express');
const router  = express.Router();

module.exports = (knex) => {
  const middleware  = require('../middleware/index')(knex);
  const helpers     = require('../helpers/exercises')(knex);

  // exercises
  router.route("/")
        // .all( middleware.verifyToken )
        // .all( middleware.isAuthorized )
        .get(helpers.getExercises)
        .post(helpers.createExercise)

  return router;
}
