const express = require('express');
const router = express.Router();
const auth = require('../middlewares/auth')

// User model
const User = require('../models/users')

router.get('/', auth, (req, res) => {
  User.findById(req.user.id)
  .select('-password')
    .then(user=> res.json(user))
})

router.post('/cart', (req, res) => {
  User.updateOne({_id: req.body.user_id},{"$push": {"cart": req.body.cart}})
  .then(result=> {
    res.json(result)
  })
  .catch(err=> console.log(err))
})
router.post('/cart/del', (req, res) => {
  User.updateOne({_id: req.body.user_id},{"$pull": {"cart": req.body.cart}})
  .then(result=> {
    res.json(result)
  })
  .catch(err=> console.log(err))
})
router.post('/cart/delAll', (req, res) => {
  User.updateOne({_id: req.body.user_id},{cart: req.body.cart})
  .then(result=> {
    res.json(result)
  })
  .catch(err=> console.log(err))
})

module.exports = router;