"use strict";

const jwt         = require('jsonwebtoken');

module.exports = {

  checkMandatoryInputs: (input, inputNames) => {
      for(let key of inputNames){
        if( (!input.hasOwnProperty(key)) || (!input[key]) || input[key].replace(/\s/g, '') === ''){
          return false;
        }
      }
      return true;
    }, // end of checkMandatoryInputs

    generateToken: (checkUser) => {
      console.log("user-------------------");
      console.log(checkUser);

      jwt.sign({checkUser}, process.env.JWT_SECRET, { expiresIn: '1h' }, (err, token) => {
        console.log("here--------------------------", token)
        return {
          name: user.name,
          email,
          token
        };
      });
    } // end of generateToken

}

