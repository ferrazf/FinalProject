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

  // router.route(":id/workouts/:workoutId/exercises/:id")
  //       .all( middleware.verifyToken )
  //       .all( helpers.isAuthorized )
  //       .put(exercisesHelpers.updateExercise)
  //       .delete(exercisesHelpers.deleteExercise)

  router.route("/:id/workouts/:workoutId/exercises/")
        // .all( middleware.verifyToken )
        // .all( middleware.isAuthorized )
        .post(exercisesHelpers.createExercise)

  return router;
}
