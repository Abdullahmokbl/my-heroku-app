const express = require('express');
const router = express.Router();
const auth = require('../middlewares/auth')

// User model
const User = require('../models/users')

router.get('/', auth, (req, res, next) => {
  User.findById(req.user.id)
  .select('-password')
    .then(user=> res.json(user))
})

module.exports = router;