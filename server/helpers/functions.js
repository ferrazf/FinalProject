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
        // jwt.sign({user}, process.env.JWT_SECRET, { expiresIn: '1h' }, (err, token) => {

        //   if(err){ return reject(error) }
          const output = {
            id: user.id,
            name: user.name,
<<<<<<< HEAD
            email: user.email,
            // token
          }
          return resolve(output);
        // });
      })
=======
            email: user.email
            // token
          }
          return resolve(output);
        });
      // })
>>>>>>> cbef89df726e3259d3d04ffbedb8ff4b198a8fa0
    }, // end of generateToken

    getUser: async (req, res, next) => {
      return new Promise((resolve, reject)=>{
        let userId = req.params.id
        if(req.params.hasOwnProperty("userId")){
          userId = req.params.userId;
        }

        knex
          .select("*")
          .from("users")
          .where('id', userId)
          .then( results => resolve(results[0]))
          .catch( e => reject(e))
      })
    },

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

