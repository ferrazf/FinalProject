"use strict";

const express       = require('express');
const jwt           = require('jsonwebtoken');
const fnHelpers     = require('../helpers/functions');

module.exports = (knex) => {
  const helpers = require('../helpers/index')(knex);

  return{
    getUsers: (req, res, next) => {
      knex
        .select("*")
        .from("users")
        .then( results => res.json(results) );
    },

    // getUser: (req, res, next) => {
    //   knex
    //     .select("*")
    //     .from("users")
    //     .where('id', req.params.userId)
    //     .then( results => res.json(results));
    // },
  }
}
