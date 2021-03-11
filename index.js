const express = require('express');
const mongoose = require('mongoose')
const path = require('path')

const app = express();

// const DB_URL = 'mongodb://localhost:27017/firstDB';
const DB_URL = process.env.MONGODB_URI || 'mongodb+srv://admin:admin123456@cluster0.gwtyo.mongodb.net/myFirstDatabase?retryWrites=true&w=majority'

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
  .catch((err) => console.log(err))

app.use('/signup',require('./routes/signup'))
app.use('/login',require('./routes/login'))
app.use('/items',require('./routes/items'))
app.use('/user',require('./routes/user'))
app.use('/auth',require('./middlewares/auth'))


// process.on('uncaughtException', function (err) {
//   console.error('An uncaughhhht error occurred!');
//   console.error(err.stack);
// });

if(process.env.NODE_ENV === 'production'){
  try{
    app.use(express.static('my-appp/build'))
  }catch(err){
    console.log(err)
  }
  try{
    app.get('*', (req, res) => {
      res.sendFile(path.join(__dirname, 'my-appp', 'build', 'index.html'))
    })
  }catch(err){
    console.log(err)
  }
}

const port = process.env.PORT || 5000

app.listen(port, ()=> console.log('server listen on port '+port))