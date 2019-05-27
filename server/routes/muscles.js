"use strict";

const express = require('express');
const router  = express.Router();

module.exports = (knex) => {
  const middleware  = require('../middleware/index')(knex);
  const helpers     = require('../helpers/muscles')(knex);

  // mucsles
  router.route("/")
        .get(helpers.getMuscles)

  return router;
}
