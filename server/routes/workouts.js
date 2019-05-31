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
        .all( middleware.verifyToken )
        .get(helpers.getWorkouts)

  router.route("/:id")
        .all( middleware.verifyToken )
        .put(helpers.updateWorkout)

  router.route("/")
        .all( middleware.verifyToken )
        // .all( middleware.isAuthorized )
        // check if the user who is updating is the one that created ir
        .post(helpers.createWorkout)

  router.route("/:workoutId/exercises/:id")
        .all( middleware.verifyToken )
        .all( helpers.isAuthorized )
        .put(exercisesHelpers.updateExercise)
        .delete(exercisesHelpers.deleteExercise)

  router.route("/:id/exercises/")
        .all( middleware.verifyToken )
        .all( helpers.isAuthorized )
        .post(exercisesHelpers.createExercise)

  return router;
}
