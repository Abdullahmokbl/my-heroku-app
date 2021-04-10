const express = require('express');
const router = express.Router();
const auth = require('../middlewares/auth')
const nodemailer = require("nodemailer");
const config = require('config');

// User model
const User = require('../models/users')

router.get('/', auth, (req, res) => {
  User.findById(req.user.id)
  .select('-password')
    .then(user=> {
      res.json(user)
    })
})
router.get('/f', (req, res) => {
  User.find()
    .then(user=> {
      res.json(user)
    })
})


router.post('/cart', (req, res) => {
  User.updateOne({_id: req.body.user_id},{"$push": {"cart": {id:req.body.cart_id, q:req.body.q}}})
  .then(result=> {
    res.json(result)
  })
  .catch(err=> console.log(err))
})

router.post('/cart/q', (req, res) => {
  User.updateOne({_id: req.body.user_id},{cart: {id:req.body.cart_id, q:req.body.q}})
  .then(result=> {
    res.json(result)
  })
  .catch(err=> console.log(err))
})

router.post('/cart/del', (req, res) => {
  User.updateOne({_id: req.body.user_id},{"$pull": {"cart": {id:req.body.cart_id}}})
  .then(result=> {
    res.json(result)
  })
  .catch(err=> console.log(err))
})

router.post('/cart/delAll', (req, res) => {
  User.updateOne({_id: req.body.user_id},{cart: []})
  .then(result=> {
    res.json(result)
  })
  .catch(err=> console.log(err))
})

router.post('/addItem', (req, res) => {
  User.updateOne({_id: req.body.user_id},{"$push": {"items": req.body.item_id}})
  .then(result=> {
    res.json(result)
  })
  .catch(err=> console.log(err))
})

router.post('/mail', (req, res) => {
  const email = req.body.email
  // async..await is not allowed in global scope, must use a wrapper
  async function main() {
    // Generate test SMTP service account from ethereal.email
    // Only needed if you don't have a real mail account for testing
    // let testAccount = await nodemailer.createTestAccount();

    // create reusable transporter object using the default SMTP transport
    let transporter = nodemailer.createTransport({
      host: "smtp.gmail.com",
      port: 587,
      secure: false, // true for 465, false for other ports
      auth: {
        user: config.get('emailUsername'), // generated ethereal user
        pass: config.get('emailPassword'), // generated ethereal password
      },
      tls:{
        rejectUnauthorized:false
      }
    });
    
    // send mail with defined transport object
    let info = await transporter.sendMail({
      from: '"Shopping 👻" <foo@example.com>', // sender address
      to: email, // list of receivers
      subject: "Welcome ✔", // Subject line
      text: "Welcome to our Shopping club", // plain text body
      html: "<b>Welcome to our Shopping club</b>", // html body
    });

    res.json({msg: "Thank you, We will update you"})
    // console.log("Message sent: %s", info.messageId);

    // Message sent: <b658f8ca-6296-ccf4-8306-87d57a0b4321@example.com>

    // Preview only available when sending through an Ethereal account
    // console.log("Preview URL: %s", nodemailer.getTestMessageUrl(info));
    // Preview URL: https://ethereal.email/message/WaQKMgKddxQDoou...
  }

  main().catch(err=>{
    console.log(err)
    res.json({msg: "Please try again"})
  });

})



module.exports = router;