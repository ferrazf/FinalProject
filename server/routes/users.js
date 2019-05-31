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
        // .all( middleware.verifyToken )
        // .all( middleware.isAuthorized )
        .get(helpers.getUsers)

  router.route("/:id/workouts")
        // .all( middleware.verifyToken )
        // .all( middleware.isAuthorized )
        .get(workoutsHelpers.getWorkouts)

  router.route("/:userId/workouts/:workoutId/exercises/:id")
  //       .all( middleware.verifyToken )
  //       .all( helpers.isAuthorized )
        .put(exercisesHelpers.updateExercise)
        .delete(exercisesHelpers.deleteExercise)

  router.route("/:userId/workouts/:id/exercises/")
        // .all( middleware.verifyToken )
        // .all( middleware.isAuthorized )
        .post(exercisesHelpers.createExercise)

  router.route("/:userId/workouts/:id")
        .put(workoutsHelpers.updateWorkout)

  return router;
}
