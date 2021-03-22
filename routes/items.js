const express = require('express');
const router = express.Router();
const auth = require('../middlewares/auth');
const multer = require('multer');
// const upload = multer({des:'uploads/'})

// Item model
const Item = require('../models/items')


router.get('/', (req, res) => {
  Item.find()
    .then(items => {
      res.json(items)
    })
})
// 
var storage =   multer.diskStorage({
  destination: function (req, file, callback) {
    callback(null, './uploads');
  },
  filename: function (req, file, callback) {
    callback(null, file.fieldname + '-' + Date.now() + file.originalname);
  }
});
var upload = multer({ storage : storage}).single('img');

router.post('/', (req, res) => {
  upload(req,res,function(err) {
    if(err) {
      console.log(err)
      // return res.end("Error uploading file.");
    }
    // if(!req.body.item.name || !req.body.item.price || !req.body.item.info || !req.body.item.description || !req.file){
    //   return res.status(400).json({msg:"Please enter all fields"})
    // }
    const {name, price, info, description} = JSON.parse(req.body.item);
    const img = req.file.filename
    const newItem = new Item({
      name,
      price,
      info,
      img,
      description
    })
    newItem.save()
      .then(item => {
        res.json(item)
      })
      .catch((err)=> {
        console.log(err)
      })
  });
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