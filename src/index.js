const mongoose = require('mongoose')
const express = require('express')
const cors = require('cors')
const passport = require('passport')
const cookieParser = require('cookie-parser')
const session = require('express-session')
const bodyParser = require('body-parser')
const app = express()
const routes = require('./routes')
const mongooseConnection = require('./config/db')

app.use(express.json())
app.use(
  cors({
    origin: 'http://localhost:3000', // <-- location of the react app were connecting to
    credentials: true,
  })
)
app.use(
  session({
    secret: 'secretcode',
    resave: true,
    saveUninitialized: true,
  })
)
app.use(cookieParser('secretcode'))
app.use(passport.initialize())
app.use(passport.session())
require('./config/passportConfig')(passport)

app.use('/', routes)
//----------------------------------------- END OF MIDDLEWARE---------------------------------------------------

//----------------------------------------- END OF ROUTES---------------------------------------------------
//Start Server
app.listen(4000, () => {
  console.log('Server Has Started')
})
