"use strict";

const express     = require('express');
const jwt         = require('jsonwebtoken');

const setWorkoutExercises = (body, workout) => {
  const newWorkout = Object.assign({}, workout);

  if(body.hasOwnProperty("sets")){
    newWorkout.sets = body.sets;
  }
  if(body.hasOwnProperty("reps")){
    newWorkout.reps = body.reps;
  }
  if(body.hasOwnProperty("rest")){
    newWorkout.rest = body.rest;
  }
  if(body.hasOwnProperty("weight")){
    newWorkout.rest = body.rest;
  }
  return newWorkout;
}

module.exports = (knex) => {

  const fnHelpers   = require('../helpers/functions')(knex);

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

      }else if(req.params.hasOwnProperty("muscleId")){
        knex
          .select("*")
          .from("exercises")
          .where("muscle_group_id", req.params.muscleId)
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

      if(req.params.hasOwnProperty("id")){
        const { exercise_id } = req.body;

        knex
          .select("*")
          .from("workout_exercises")
          .where("workout_id", req.params.id)
          .andWhere("exercise_id", exercise_id)
          .then( result => {

            if(result.length){
              res.status(400).json( {error: "Exercise already existis in this workout"} );

            }else{

              const workout = {
                workout_id: req.params.id,
                exercise_id: exercise_id
              }
              const newWorkout = setWorkoutExercises(req.body, workout);
              knex("workout_exercises")
                .insert(newWorkout)
                .returning('*')
                .then( result =>  res.status(200).json(result))
            }
          })
          .catch(e => { res.status(400).json( {e} )});

      }else{

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
    },

    updateExercise: async (req, res, next) => {

      if(req.params.hasOwnProperty("workoutId")){

        knex
          .select("*")
          .from("workout_exercises")
          .where("workout_id", req.params.workoutId)
          .andWhere("exercise_id", req.params.id)
          .then( result => {

            const workout = setWorkoutExercises(req.body, result[0]);

            knex("workout_exercises")
              .update(workout)
              .returning('*')
              .where("workout_id", req.params.workoutId)
              .andWhere("exercise_id", req.params.id)
              .then( result =>  res.status(200).json(result))
          })
          .catch(e => res.status(400).json( {e} ));
      }

    },

    deleteExercise: async (req, res, next) => {

      if(req.params.hasOwnProperty("workoutId")){

        knex
          .select("*")
          .from("workout_exercises")
          .where("workout_id", req.params.workoutId)
          .andWhere("exercise_id", req.params.id)
          .then( result => {
            const workout = result[0];

            knex("workout_exercises")
              .where("workout_id", req.params.workoutId)
              .andWhere("exercise_id", req.params.id)
              .del()
              .then( result =>  res.status(200).json({message: "Deleted"}))
          })
          .catch(e => res.status(400).json( {e} ));
      }

    }
  }
}

