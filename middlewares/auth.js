const jwt = require('jsonwebtoken')
const config = require('config')

// User model
const User = require('../models/users')

function auth(req, res, next){

  const token = req.header('x-auth-token')

  if(!token) return res.status(401).json({msg:'No token, Autherization denied'})

  try{
    // verify token
    const decoded = jwt.verify(token, config.get('jwtSecret'))
    // add user from payload
    req.user = decoded
    next()
  }catch(e){
    res.status(400).json({msg:'Token is not valid'});
  }

}

module.exports = auth;