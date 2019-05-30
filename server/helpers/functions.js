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

    generateToken: (user, res) => {
      jwt.sign({user}, process.env.JWT_SECRET, { expiresIn: '1h' }, (err, token) => {
        const output = {
          name: user.name,
          email: user.email,
          token
        }
        res.status(200).json(output);
      });
    }, // end of generateToken

    getUserByToken: (req, res, next, cb_fn) => {
      jwt.verify(req.token, process.env.JWT_SECRET, (err, authData) => err ? cb_fn(null) : cb_fn(authData.user))
    }

}

