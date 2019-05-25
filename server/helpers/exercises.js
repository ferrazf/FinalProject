"use strict";

const express     = require('express');
const jwt         = require('jsonwebtoken');

module.exports = (knex) => {

  return{
    getExercises: (req, res, next) => {


    },
    createExercise: (req, res, next) => {

      res.status(200).json(req.body)

    }
  }
}

