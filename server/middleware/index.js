const request       = require("express");
const jwt           = require('jsonwebtoken');

module.exports = (knex) => {
  return{
    isAuthorized: (req, res, next) => {
      jwt.verify(req.token, process.env.JWT_SECRET, (err, authData) => {
        if(err) {
          res.sendStatus(403);
        } else {
          // "authData": {
          //     "user": {
          //         "id": 1,
          //         "username": "user1",
          //         "email": "user1@gmail.com"
          //     },
          //     "iat": 1558721743,
          //     "exp": 1558725343
          // }
          res.json({
            message: 'Post created...',
            authData
          });
        }
      });
    },
    // Verify Token
    verifyToken: (req, res, next) => {
      // Get auth header value
      const bearerHeader = req.headers['authorization'];
      // Check if bearer is undefined
      if(typeof bearerHeader !== 'undefined') {
        // Split at the space
        const bearer = bearerHeader.split(' ');
        // Get token from array
        const bearerToken = bearer[1];
        // Set the token
        req.token = bearerToken;
        // Next middleware
        next();
      } else {
        // Forbidden
        res.sendStatus(403);
      }

    }
  }
}
