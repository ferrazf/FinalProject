"use strict";

const express = require('express');
const router  = express.Router();

module.exports = (knex) => {
  const middleware  = require('../middleware/index')(knex);
  const helpers     = require('../helpers/users')(knex);
  const workoutsHelpers     = require('../helpers/workouts')(knex);
  const exercisesHelpers     = require('../helpers/exercises')(knex);

  // users
  router.route("/")
        .get(helpers.getUsers)

  router.route("/:id/workouts")
        .get(workoutsHelpers.getWorkouts)

  router.route("/:userId/workouts/:workoutId/exercises/:id")
        .put(exercisesHelpers.updateExercise)
        .delete(exercisesHelpers.deleteExercise)

  router.route("/:userId/workouts/:id/exercises/")
        .post(exercisesHelpers.createExercise)

  router.route("/:userId/workouts/:id")
        .put(workoutsHelpers.updateWorkout)

  return router;
}
