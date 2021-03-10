const express = require('express');
const router = express.Router();
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')

// User model
const User = require('../models/users')

router.post('/', (req, res, next) => {
  const {username, email, password} = req.body
  // simple validation
  if(!email || !password){
    return res.status(400).json({msg: "Please enter all fields"})
  }
  // check for existing user
  User.findOne({email}, (err, user)=>{
    if(!user) return res.status(400).json({msg: "User does not exist"})
    
    // validate password
    bcrypt.compare(password, user.password)
      .then(isMatch => {
        if(!isMatch) return res.status(400).json({msg: "Invalid credentials"})
        jwt.sign(
          {id: user._id},
          "myjwtsecret",
          {expiresIn: 3600},
          (err, token) => {
            if(err) throw err;
            res.json({
              token,
              user: {
                id: user.id,
                username: user.username,
                email: user.email
              }
            })
          }
        )
      })
  })
})

module.exports = router;