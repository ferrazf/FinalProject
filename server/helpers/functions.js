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

    generateToken: (checkUser, res) => {
      jwt.sign({checkUser}, process.env.JWT_SECRET, { expiresIn: '1h' }, (err, token) => {
        const output = {
          name: checkUser.name,
          email: checkUser.email,
          token
        }
        res.status(200).json(output);
      });
    } // end of generateToken

}

