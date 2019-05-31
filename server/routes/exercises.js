"use strict";

const express = require('express');
const router  = express.Router();

module.exports = (knex) => {
  const middleware  = require('../middleware/index')(knex);
  const helpers     = require('../helpers/exercises')(knex);

  // exercises
  router.route("/")
        .get(helpers.getExercises)

<<<<<<< HEAD
router.route("/")
=======
  router.route("/")
>>>>>>> 7581fc35ad632527c153d1789c3603f5c4655853
        // .all( middleware.verifyToken )
        // .all( middleware.isAuthorized )
        .post(helpers.createExercise)

  return router;
}
