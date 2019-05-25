"use strict";

const express     = require('express');
const jwt         = require('jsonwebtoken');

const muscles = [
    {
      id: 1,
      name: 'leg'
    },
    {
      id: 2,
      name: 'biceps'
    },
    {
      id:3,
      name: 'triceps'
    }
  ];

module.exports = (knex) => {

  return{
    // getMuscles: (req, res, next) => {
    //   res.json(muscles);
    // // knex
    // //   .select("*")
    // //   .from("users")
    // //   .then((results) => {
    // //     res.json(results);
    // // });
    // },

    // getMuscle: (req,res,next) =>{

    // },

    // createMuscle: (req,res,next) => {

    // }
  }
}
