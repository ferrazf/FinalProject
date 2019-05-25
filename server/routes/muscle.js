"use strict";

const express = require('express');
const router  = express.Router();

module.exports = (knex) => {
  const middleware  = require('../middleware/index')(knex);
  const helpers     = require('../helpers/mucsles')(knex);

  // mucsles
  router.route("/")
        // .all( middleware.verifyToken )
        // .all( middleware.isAuthorized )
        .get(helpers.getMuscles)

  // mucsles
  router.route("/:muscleId")
        // .all( middleware.verifyToken )
        // .all( middleware.isAuthorized )
        .get(helpers.getMuscle)
  return router;
}
