const express = require('express');
// const MongoClient = require('mongodb').MongoClient;
// const bodyparser = require('body-parser')
// const bcrypt = require('bcryptjs')
// const jwt = require('jsonwebtoken')
const mongoose = require('mongoose')

const app = express();

const DB_URL = 'mongodb://localhost:27017/firstDB';

// let userSchema = mongoose.Schema({
//   username: {
//     type: String,
//     required: true,
//     unique: true
//   },
//   email: {
//     type: String,
//     required: true,
//     unique: true
//   },
//   password: {
//     type: String,
//     required: true
//   }
// })

// let User = mongoose.model('user', userSchema) // collection users

// const bodyparserMW = bodyparser();

// MongoClient.connect('mongodb://localhost:27017/firstDB', (err, client) => {
//   console.log('connected to db')
//   let db = client.db()
//   client.close()
// })
// middleware
// app.use((req, res)=>{
//   console.log('sdsff')
// })

app.use(express.json());

// Add headers
app.use(function (req, res, next) {

  // Website you wish to allow to connect
  res.setHeader('Access-Control-Allow-Origin', '*');

  // Request methods you wish to allow
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');

  // Request headers you wish to allow
  res.setHeader('Access-Control-Allow-Headers', '*');

  // Set to true if you need the website to include cookies in the requests sent
  // to the API (e.g. in case you use sessions)
  res.setHeader('Access-Control-Allow-Credentials', true);

  // Pass to next layer of middleware
  next();
});

mongoose.connect(DB_URL, { useNewUrlParser: true, useCreateIndex: true })
  .then(() => console.log('connected to database'))
  .catch(() => console.log(err))

app.get('/', (req, res, next) => {
  User.find((err, users)=>{
    console.log(users)
    res.json(users)
    // mongoose.disconnect()
    // res.sendFile(__dirname + '\\index.html')
  })
})

// app.get('/about', (req, res, next) => {
//   // res.render('index.html')
//   // res.sendFile(__dirname + '\\about.html')
//   res.json({na: 'dd'})
//   // console.log('dfd')
// })

app.use('/signup',require('./routes/signup'))
app.use('/login',require('./routes/login'))
app.use('/items',require('./routes/items'))
app.use('/user',require('./routes/user'))
app.use('/auth',require('./middlewares/auth'))

// app.post('/signup', bodyparser.urlencoded({extended: true}), (req, res, next) => {
//   // console.log(req.body)
//   // res.json(req.body)
//   mongoose.connect(DB_URL, { useNewUrlParser: true } , err => {
//     const {username, email, password} = req.body
//     // simple validation
//     if(!username || !email || !password){
//       return res.status(400).json({msg: "Please enter all fields"})
//     }
//     // check for existing user
//     User.findOne({email}, (err, user)=>{
//       if(user) return res.status(400).json({msg: "User already exists"})
//       let newUser = new User({
//         username,
//         email,
//         password
//       })
//       bcrypt.genSalt(10, (err, salt)=>{
//         bcrypt.hash(newUser.password, salt, (err, hash) => {
//           if (err) throw err;
//           newUser.password = hash;
//           newUser.save((err, user) => {
//             // console.log(newUser)
//             // res.json(result)
//             jwt.sign(
//               {id: newUser._id},
//               "myjwtsecret",
//               {expiresIn: 3600},
//               (err, token) => {
//                 if(err) throw err;
//                 res.json({
//                   token,
//                   user: {
//                     id: user.id,
//                     username: user.username,
//                     email: user.email
//                   }
//                 })
//               }
//             )
            
//             mongoose.disconnect();
//             // res.redirect('/')
//           })
//         })
//       })
//       // newUser.save((err, result) => {
//       //   console.log(result)
//       //   res.json(result)
//       //   mongoose.disconnect();
//       //   // res.redirect('/')
//       // })
//     })
//   })
// })

// app.post('/login', bodyparser.urlencoded({extended: true}), (req, res, next) => {
//   const user = {
//     email: req.body.email,
//     password: req.body.password
//   }
//   mongoose.connect(DB_URL, { useNewUrlParser: true }, (err) => {
//     User.findOne(user,(err, user)=>{
//       res.json(user)
//       mongoose.disconnect()
//     })
//   })
// })

const port = process.env.PORT || 5000

app.listen(port, ()=> console.log('server listen on port '+port))