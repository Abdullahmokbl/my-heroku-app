// const express = require('express');
// const router = express.Router();
// const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')

// User model
const User = require('../models/users')

function auth(req, res, next){

  const token = req.header('x-auth-token')

  if(!token) return res.status(401).json({msg:'no token, autherization denied'})

  try{
    // verify token
    const decoded = jwt.verify(token, 'myjwtsecret')
    // add user from payload
    req.user = decoded
    next()
  }catch(e){
    res.status(400).json({msg:'token is not valid'});
  }

}

module.exports = auth;