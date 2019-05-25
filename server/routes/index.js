"use strict";

const express = require('express');
const router  = express.Router();

module.exports = (knex) => {
  const helpers = require('../helpers/index')(knex);

  router.route('/login')
        .post(helpers.login);

  return router;
}
