"use strict";

const express     = require('express');
const jwt         = require('jsonwebtoken');

module.exports = (knex) => {
  const helpers   = require('./users')(knex);

  return{
    getWorkouts: (req, res, next) => {
      knex
        .select("*")
        .from("workouts")
        .then( result =>  res.status(200).json(result))
        .catch(e => res.status(400).json( {e} ));
    },

    getWorkout: (req, res, next) => {
      knex
        .select("*")
        .from("workouts")
        .where('id', req.params.id)
        .then( result =>  res.status(200).json(result))
        .catch(e => res.status(400).json( {e} ));
    },

    createWorkout: async (req, res, next) => {
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

      knex('workouts').max('id')
        .then(result => result[0].max + 1)
        .then( max => {

          const workout = Object.assign({}, req.body);
          workout['id'] = max;
          knex('workouts')
            .insert(workout)
            .returning('*')
            .then( result =>  res.status(200).json(result))
        })
        .catch(e => res.status(400).json( {e} ));
    }
  }
}

