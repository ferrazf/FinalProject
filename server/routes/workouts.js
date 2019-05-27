"use strict";

const express = require('express');
const router  = express.Router();

module.exports = (knex) => {
  const middleware  = require('../middleware/index')(knex);
  const helpers     = require('../helpers/workouts')(knex);
  const exercisesHelpers     = require('../helpers/exercises')(knex);

  // workouts
  router.route("/")
        .get(helpers.getWorkouts)

  router.route("/:workoutId/exercises")
        .get(exercisesHelpers.getExercises)

  router.route("/:id")
        .get(helpers.getWorkout)

  router.route("/")
        // .all( middleware.verifyToken )
        // .all( middleware.isAuthorized )
        // check if the user who is updating is the one that created ir
        .post(helpers.createWorkout)

  return router;
}
