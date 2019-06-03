"use strict";

const express = require('express');
const router  = express.Router();

module.exports = (knex) => {
  const middleware  = require('../middleware/index')(knex);
  const helpers     = require('../helpers/workouts')(knex);
  const exercisesHelpers     = require('../helpers/exercises')(knex);

  router.route("/:workoutId/exercises")
        .get(exercisesHelpers.getExercises)

  router.route("/:id")
        .get(helpers.getWorkout)

  router.route("/")
        .get(helpers.getWorkouts)

  router.route("/:workoutId/exercises/:id")
        .put(exercisesHelpers.updateExercise)
        .delete(exercisesHelpers.deleteExercise)

  router.route("/:id/exercises/")
        .post(exercisesHelpers.createExercise)

  return router;
}
