"use strict";

const express = require('express');
const router  = express.Router();

module.exports = (knex) => {
  const middleware  = require('../middleware/index')(knex);
  const helpers = require('../helpers/index')(knex);

  router.route('/login')
    .post( helpers.login );

  router.route('/register')
    .post( helpers.register );

  return router;
}
