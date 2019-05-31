"use strict";

const express = require('express');
const router  = express.Router();

module.exports = (knex) => {
  const middleware  = require('../middleware/index')(knex);
  const helpers     = require('../helpers/users')(knex);
  const workoutsHelpers     = require('../helpers/workouts')(knex);

  // users
  router.route("/")
        // .all( middleware.verifyToken )
        // .all( middleware.isAuthorized )
        .get(helpers.getUsers)

  router.route("/:id/workouts")
        // .all( middleware.verifyToken )
        // .all( middleware.isAuthorized )
        .get(workoutsHelpers.getWorkouts)

  return router;
}
