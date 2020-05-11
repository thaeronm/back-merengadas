'use strict'
require('dotenv').config();
const jwt = require('jsonwebtoken');

//Controlador
const JsonWebToken = {}

JsonWebToken.Sign = async (User) => {
  const Token = await jwt.sign({User}, process.env.SECRET, {
    expiresIn: process.env.LIFETIME
  });
  return Token;
};

JsonWebToken.Decode = (token) => {
  jwt.verify(token, process.env.SECRET), (err, data) => {
    return data
  }
};

module.exports = JsonWebToken;