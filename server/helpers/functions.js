"use strict";

const jwt         = require('jsonwebtoken');

module.exports = (knex) => {
  return {

    checkMandatoryInputs: (input, inputNames) => {
      for(let key of inputNames){
        if( (!input.hasOwnProperty(key)) || (!input[key]) || input[key].replace(/\s/g, '') === ''){
          return false;
        }
      }
      return true;
    }, // end of checkMandatoryInputs

    generateToken: async (user) => {
      return new Promise((resolve, reject)=>{
        jwt.sign({user}, process.env.JWT_SECRET, { expiresIn: '1h' }, (err, token) => {

          if(err){ return reject(error) }
          const output = {
            name: user.name,
            email: user.email,
            token
          }
          return resolve(output);
        });
      })
    }, // end of generateToken

    getUserByToken: async (req, res, next) => {
      return new Promise((resolve, reject)=>{
        jwt.verify(req.token, process.env.JWT_SECRET, (err, authData) => err ? reject(err) : resolve(authData.user))
      })
    },

    isUsersWorkout: async (user, workout_id) => {
      return new Promise((resolve, reject ) => {
        knex
          .select("*")
          .from("workouts")
          .where("id", workout_id)
          .then(result => {
            console.log(result[0])
            const workout = result[0];
            if(workout.user_id != user.id){
              reject("Forbidden: you are not this workout's owner");
            }else{
              resolve(workout);
            }
          })
          .catch( e => reject(e));
      })
    }
  }
}

