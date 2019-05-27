"use strict";

const express     = require('express');
const jwt         = require('jsonwebtoken');

module.exports = (knex) => {
  const helpers   = require('./users')(knex);

  return{
    getExercises: (req, res, next) => {


    },
    createExercise: async (req, res, next) => {
      // const user = helpers.getUserByToken(req, res, next);
      // if( !user ){
      //   return res.sendStatus(403);
      // }

      // let user = await helpers.getUserByToken(req, res, next);
      // if( !user ){
      //   user = await knex
      //     .select("*")
      //     .from("users")
      //     .where('id', 1)
      //   console.log('user               ----------------------- ');
      //   console.log(user);
      // }

      knex('exercises').max('id')
        .then(result => result[0].max + 1)
        .then( max => {

          const exercise = Object.assign({}, req.body);
          exercise['id'] = max;
          knex('exercises')
            .insert(exercise)
            .returning('*')
            .then( result =>  res.status(200).json(result))
        })
        .catch(e => res.status(400).json( {e} ));
    }
  }
}

