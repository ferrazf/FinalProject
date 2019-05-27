"use strict";

const express     = require('express');
const jwt         = require('jsonwebtoken');

module.exports = (knex) => {
  const helpers   = require('./users')(knex);

  return{
    getExercises: (req, res, next) => {

      if(req.params.hasOwnProperty("workoutId")){
        knex
          .select("w.workout_id as id", "w.exercise_id", "e.name", "e.descr",
            "w.sets", "w.reps", "w.rest",
            "e.muscle_group_id", "m.name as muscle_group_name")
          .from("workout_exercises as w")
          .innerJoin("exercises as e", "e.id", "w.exercise_id")
          .innerJoin("muscle_groups as m", "m.id", "e.muscle_group_id")
          .where("w.workout_id", req.params.workoutId)
          .then( result =>  res.status(200).json(result))
          .catch(e => res.status(400).json( {e} ));

      }else{
        knex
          .select( "e.id", "e.name", "e.descr",
            "e.muscle_group_id", "m.name as muscle_group_name")
          .from("exercises as e")
          .innerJoin("muscle_groups as m", "m.id", "e.muscle_group_id")
          .then( result =>  res.status(200).json(result))
          .catch(e => res.status(400).json( {e} ));
      }
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

