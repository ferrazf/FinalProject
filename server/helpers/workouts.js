"use strict";

const express     = require('express');
const jwt         = require('jsonwebtoken');

module.exports = (knex) => {

  const fnHelpers   = require('../helpers/functions')(knex);

  const getAllWorkouts = () => {
    return new Promise((resolve, reject) => {

      knex
        .distinct("main.workout_id", "main.user_id", "main.started_at", "main.finished_at", knex.raw("ARRAY_AGG(main.name) as name"))
        .from(function () {
            this.distinct("w.id as workout_id", "w.user_id", "w.started_at", "w.finished_at", "m.id as muscle_id", "m.name")
            .from("workouts as w")
            .innerJoin("workout_exercises as we", "we.workout_id", "w.id")
            .innerJoin("exercises as e", "e.id", "we.exercise_id")
            .innerJoin("muscle_groups as m", "m.id", "e.muscle_group_id")
            .groupBy("w.id", "m.id")
            .as('main')
        })
        .groupBy("main.workout_id", "main.user_id", "main.started_at", "main.finished_at")
        .then( result =>  resolve(result))
        .catch( e => reject(e))
    })
  }

  return{
    getWorkouts: (req, res, next) => {

      fnHelpers.getUserByToken(req, res, next)
        .then( user => {
          if(user){
            knex
              .distinct("main.workout_id", "main.user_id", "main.started_at", "main.finished_at", knex.raw("ARRAY_AGG(main.name) as name"))
              .from(function () {
                  this.distinct("w.id as workout_id", "w.user_id", "w.started_at", "w.finished_at", "m.id as muscle_id", "m.name")
                  .from("workouts as w")
                  .innerJoin("workout_exercises as we", "we.workout_id", "w.id")
                  .innerJoin("exercises as e", "e.id", "we.exercise_id")
                  .innerJoin("muscle_groups as m", "m.id", "e.muscle_group_id")
                  .where("w.user_id", user.id)
                  .groupBy("w.id", "m.id")
                  .as('main')
              })
              .groupBy("main.workout_id", "main.user_id", "main.started_at", "main.finished_at")
              .then( result =>  res.status(200).json(result))

          }else{
            getAllWorkouts()
              .then(result =>  res.status(200).json(result))
              .catch(e => res.status(400).json(e))
          }
        })
        .catch( e => {
          if(e.name == "JsonWebTokenError" ){
            getAllWorkouts()
                .then(result =>  res.status(200).json(result))
                .catch(e => res.status(400).json(e))

          }else{
            res.status(400).json(e);
          }
        });
    },

    getWorkout: (req, res, next) => {
      knex
        .distinct("main.workout_id", "main.user_id", "main.started_at", "main.finished_at", knex.raw("ARRAY_AGG(main.name) as name"))
        .from(function () {
            this.distinct("w.id as workout_id", "w.user_id", "w.started_at", "w.finished_at", "m.id as muscle_id", "m.name")
            .from("workouts as w")
            .innerJoin("workout_exercises as we", "we.workout_id", "w.id")
            .innerJoin("exercises as e", "e.id", "we.exercise_id")
            .innerJoin("muscle_groups as m", "m.id", "e.muscle_group_id")
            .where("w.id", req.params.id)
            .groupBy("w.id", "m.id")
            .as('main')
        })
        .groupBy("main.workout_id", "main.user_id", "main.started_at", "main.finished_at")
        .then( result =>  res.status(200).json(result))
        .catch(e => res.status(400).json( {e} ));

// select distinct main.workout_id, string_agg(main.muscle_name, ', ')
// from (select distinct w.id as workout_id, m.id as muscle_id, m.name as muscle_name
// from workouts as w
// inner join workout_exercises as we
// on we.workout_id = w.id
// inner join exercises as e
// on e.id = we.exercise_id
// inner join muscle_groups as m
// on m.id = e.muscle_group_id
// group by w.id, m.id
// order by w.id, m.id) as main
// group by main.workout_id
    },

    createWorkout: async (req, res, next) => {

      fnHelpers.getUserByToken(req, res, next)
        .then( user => {

          if(user){
            knex('workouts').max('id')
              .then(result => result[0].max + 1)
              .then( max => {

                const workout = Object.assign({}, req.body);
                workout['id'] = max;
                workout['user_id'] = user.id
                knex('workouts')
                  .insert(workout)
                  .returning('*')
                  .then( result =>  res.status(200).json(result))
              })
          }else{
            res.status(400).json({error: 'User not found'})
          }

        })
        .catch( e => res.status(400).json(e));
    },

    updateWorkout: async (req, res, next) => {
      fnHelpers.getUserByToken(req, res, next)
        .then( user =>{
          if(user){
            fnHelpers.isUsersWorkout(user, req.params.id)
              .then( workout => {
                if(req.body.hasOwnProperty('started_at')){
                  workout.started_at = new Date();
                }
                if(req.body.hasOwnProperty('finished_at')){
                  workout.finished_at = new Date();
                }

                knex("workouts")
                  .update(workout)
                  .returning('*')
                  .where("id", req.params.id)
                  .then( result =>  res.status(200).json(result))
              })
              .catch( e => res.status(400).json(e))
          }else{
            reject('User not found');
          }
        })
        .catch( e => res.status(400).json(e));
    },

    isAuthorized:  (req, res, next) => {
      fnHelpers.getUserByToken(req, res, next)
        .then( user =>{
          if(user){

            let workout_id = req.params.id;
            if(req.params.hasOwnProperty('workoutId')){
              workout_id = req.params.workoutId;
            }

            fnHelpers.isUsersWorkout(user, workout_id)
              .then( workout => next())
              .catch( e => res.status(400).json(e))
          }else{
            reject('User not found');
          }
        })
        .catch( e => res.status(400).json(e));
    }
  }
}

