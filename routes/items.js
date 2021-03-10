const express = require('express');
const router = express.Router();
const auth = require('../middlewares/auth')

// Item model
const Item = require('../models/items')


router.get('/', (req, res, next) => {
  Item.find()
    .then(items => {
      res.json(items)
    })
})

router.post('/', (req, res, next) => {
  const {name, description} = req.body;
  const newItem = new Item({
    name,
    description
  })
  newItem.save()
    .then(item => {
      console.log(item)
      res.json(item)
    })
})

router.get('/item/:s', (req, res, next) => {
  const _id = req.url.slice(6)
  Item.findOne({_id})
    .then(item => {
      // if(!item) res.status(404).json({msg:"Page does not exist"})
      res.json(item)
    })
    .catch(err=> console.log(err))
})

module.exports = router