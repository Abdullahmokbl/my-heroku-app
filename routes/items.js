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
    const {name, price, info, description, seller} = JSON.parse(req.body.item);
    const img = req.file.filename
    const newItem = new Item({
      name,
      price,
      info,
      img,
      description,
      seller
    })
    newItem.save()
      .then(item => {
        res.json(item)
      })
      .catch((err)=> {
        console.log(err)
        res.json({msg: "Something went wrong"})
      })
  });
})

router.get('/item/:s', (req, res) => {
  const _id = req.url.slice(6)
  Item.findOne({_id})
    .then(item => {
      // if(!item) res.status(404).json({msg:"Page does not exist"})
      res.json(item)
    })
    .catch(err=> console.log(err))
})
// Item.find({seller: {name:''}}) find in array
router.post('/userItems', (req, res) => {
  Item.find({"seller.id": req.body.user_id})
  .then(result=> {
    res.json(result)
  })
  .catch(err=> console.log(err))
})

router.post('/seller', (req, res) => {
  Item.find({"seller.id": req.body.user_id})
  .then(result=> {
    res.json(result)
  })
  .catch(err=> console.log(err))
})

router.post('/search', (req, res) => {
  const name = req.body.item.toLowerCase()
  Item.find({"name":  new RegExp(name)})
    .then(item => {
      res.json(item)
    })
    .catch(err=> console.log(err))
})

module.exports = router