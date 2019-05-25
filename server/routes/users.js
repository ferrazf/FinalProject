"use strict";

const express = require('express');
const router  = express.Router();

module.exports = (knex) => {
  const middleware  = require('../middleware/index')(knex);
  const helpers     = require('../helpers/users')(knex);

  // comments
  router.route("/")
        // .all( middleware.verifyToken )
        // .all( middleware.isAuthorized )
        .get(helpers.getUsers)

  return router;
}
