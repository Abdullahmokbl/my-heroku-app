const express = require('express');
// const MongoClient = require('mongodb').MongoClient;
const router = express.Router();
// const bodyparser = require('body-parser');
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')
const config = require('config')

// User model
const User = require('../models/users')


router.post('/', (req, res, next) => {
  // console.log(req.body)
  // res.json(req.body)
  const {username, email, password} = req.body
  // simple validation
  if(!username || !email || !password){
    return res.status(400).json({msg: "Please enter all fields"})
    // return res.json({msg: "Please enter all fields"})
  }
  // check for existing user
  User.findOne({email}, (err, user)=>{
    if(user) return res.status(400).json({msg: "User already exists"})
    const items = [];
    const cart = [];
    let newUser = new User({
      username,
      email,
      password,
      items,
      cart
    })
    // create salt & hash
    bcrypt.genSalt(10, (err, salt)=>{
      bcrypt.hash(newUser.password, salt, (err, hash) => {
        if (err) throw err;
        newUser.password = hash;
        newUser.save((err, user) => {
          // console.log(newUser)
          // res.json(result)
          jwt.sign(
            {id: newUser._id},
            config.get('jwtSecret'),
            {expiresIn: 3600},
            (err, token) => {
              if(err) throw err;
              res.json({
                token,
                user: {
                  id: user.id,
                  username: user.username,
                  email: user.email,
                  items: user.items,
                  cart: user.cart
                }
              })
            }
          )
          
          // mongoose.disconnect();
          // res.redirect('/')
        })
      })
    })
    // newUser.save((err, result) => {
    //   console.log(result)
    //   res.json(result)
    //   mongoose.disconnect();
    //   // res.redirect('/')
    // })
  })
})

module.exports = router;