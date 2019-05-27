"use strict";

const express     = require('express');

module.exports = (knex) => {

  return{
    getMuscles: (req, res, next) => {
      knex
        .select("*")
        .from("muscle_groups")
        .then(results => res.json(results));
    }
  }
}
