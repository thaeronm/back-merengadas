const express = require('express');
const jwt = require('jsonwebtoken');
require('dotenv').config();

const auth = express.Router();
auth.use((req, res, next) => {
    const authorization = req.headers.authorization;
    if (typeof authorization !== 'undefined') {
      const bearer = authorization.split(" ");
      const token = bearer[1];
      jwt.verify(token, process.env.SECRET, (err, decoded) => {      
        if (err) {
          return res.json({ mensaje: 'Token inválido' });    
        } else {
          req.decoded = decoded;    
          next();
        }
      });
    } else {
      res.send({ 
          mensaje: 'Se requiere token.' 
      });
    }
 });

module.exports = auth;