"use strict";

const express     = require('express');
const jwt         = require('jsonwebtoken');
const bcrypt      = require('bcrypt');
const fnHelpers   = require('../helpers/functions');

module.exports = (knex) => {

  return{
    login: (req, res, next) => {

      const {email, password} = req.body;
      knex
        .select("*")
        .from("users")
        .where('email', email)
        .then((foundUser) => {
          if(!foundUser.length){ return res.status(400).send({ error: "Username not found. Please enter valid username."}); }

          if(bcrypt.compareSync( password, foundUser[0].password)){
            fnHelpers.generateToken(foundUser[0], res);
          } else {
            return res.status(400).send({ error: "Incorrect password. Please try again."});
          }
        });

    },

    register: (req, res, next) => {

      const inputs = ['name', 'email', 'password'];

      if(! fnHelpers.checkMandatoryInputs(req.body, inputs)){
        return res.status(400).json( { error: 'Empty input(s)' } );
      }

      const {name, email, password} = req.body;
      knex.select("*")
        .from("users")
        .where("email", email)
        .then( result => {

          if (result.length === 1) {
            return res.status(400).send({ error: "Email already taken. Please enter new email and try again." })
          }

          knex('users').max('id')
            .then(result => result[0].max + 1)
            .then( max => {

              const hashedPassword = bcrypt.hashSync(password,10);

              const newUser = {
                id: max,
                name,
                email,
                password: hashedPassword
              };

              knex('users')
                .insert(newUser)
                .returning('*')
                .then( createdUser => {

                  // creates user with some default workouts
                  knex('workouts').max('id')
                    .then( result => result[0].max )
                    .then( max => {

                      const workoutsIds = [1, 2, 3, 4, 5];

                      knex.select("*")
                        .from("workouts")
                        .whereIn('id', workoutsIds)
                        .orderBy('id')
                        .then( originalWorkouts => {

                          const workouts = [...originalWorkouts];
                          workouts.forEach(workout => {
                            max ++;
                            workout.id  = max;
                            workout.user_id = createdUser[0].id;
                            return workout;
                          })

                          knex('workouts')
                            .insert(workouts)
                            .returning('*')
                            .orderBy('id')
                            .then( createdWorkouts =>  {

                              // default wrokout_exercises
                              knex.select("*")
                                .from("workout_exercises")
                                .whereIn("workout_id", workoutsIds)
                                .orderBy('workout_id')
                                .then( originalWorkoutExercises => {

                                  const workout_exercises = [];
                                  originalWorkoutExercises.forEach( we =>{
                                    const { exercise_id, sets, reps, rest } = we;

                                    const workout_id = createdWorkouts[we.workout_id - 1].id;
                                    workout_exercises.push({
                                      workout_id,
                                      exercise_id,
                                      sets,
                                      reps,
                                      rest
                                    });
                                  })

                                  knex('workout_exercises')
                                    .insert(workout_exercises)
                                    .returning('*')
                                    .orderBy('workout_id')
                                    .then( createdWorkoutExercises =>  {})
                                })// end of select wrokout_exercises
                            })// end of insert workouts
                        })// end of original workouts
                  }) // end of max workouts
                  fnHelpers.generateToken(createdUser[0], res);
                }) // end of insert user
            });
        })
        .catch(e => res.status(400).json( {e} ));
    },

    getUserByToken: (req, res, next) => {
      fnHelpers.getUserByToken(req, res, next, (user)=>{
        if(user){
          const sendUser = {
            id: user.id,
            name: user.name,
            email: user.email
          }
          res.status(200).json(sendUser)
        }else{
          res.status(400).json({error: 'User not found'})
        }
      });

    }
  }
}
