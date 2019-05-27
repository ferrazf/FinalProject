"use strict";

const express     = require('express');
const jwt         = require('jsonwebtoken');

module.exports = (knex) => {

  return{
    login: (req, res, next) => {
      // console.log(req.body)
      const user = { id: 2, name: 'Bob Charles', email: 'bob.charles@charles.com' }
      jwt.sign({user}, process.env.JWT_SECRET, { expiresIn: '1h' }, (err, token) => {
        res.json({
          token
        });
      });
    }
  }
}




// const request       = require("request");
// const jwt           = require('jsonwebtoken');

// module.exports = (knex) => {
//   return{
//     isAuthorized: (req, res, next) => {
//       jwt.verify(req.token, 'secretkey', (err, authData) => {
//         if(err) {
//           res.sendStatus(403);
//         } else {
//           res.json({
//             message: 'Post created...',
//             authData
//           });
//         }
//       });
//     }
//     // Verify Token
//     verifyToken: (req, res, next) => {
//       // Get auth header value
//       const bearerHeader = req.headers['authorization'];
//       // Check if bearer is undefined
//       if(typeof bearerHeader !== 'undefined') {
//         // Split at the space
//         const bearer = bearerHeader.split(' ');
//         // Get token from array
//         const bearerToken = bearer[1];
//         // Set the token
//         req.token = bearerToken;
//         // Next middleware
//         next();
//       } else {
//         // Forbidden
//         res.sendStatus(403);
//       }

//     }
//   }
// }
