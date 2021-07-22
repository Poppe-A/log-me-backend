const User = require('../models/mongooseSchemas/user')
const express = require('express')
const router = express.Router()
const bcrypt = require('bcryptjs')
const passport = require('passport')
const logout = require('express-passport-logout')
// Routes
router.post('/login', (req, res, next) => {
  passport.authenticate('local', (err, user, info) => {
    if (err) throw err
    if (!user)
      res.send({ message: 'Wrong username or password', logged: false })
    else {
      req.logIn(user, (err) => {
        if (err) throw err
        res.send({ message: 'Successfully Authenticated', logged: true })
      })
    }
  })(req, res, next)
})

router.post('/register', (req, res) => {
  User.findOne({ username: req.body.username }, async (err, doc) => {
    if (err) {
      res.send('err')
    }
    if (doc) {
      res.send('User Already Exists')
    }
    if (!doc) {
      const hashedPassword = await bcrypt.hash(req.body.password, 10)
      const newUser = new User({
        username: req.body.username,
        password: hashedPassword,
        cool: req.body.username,
      })
      await newUser.save()
      res.send('User Created')
    }
  })
})

router.get('/user', (req, res) => {
  if (req.user) {
    res.send({ user: req.user }) // The req.user stores the entire user that has been authenticated inside of it.
  } else {
    res.send({ user: null })
  }
})

router.delete('/logOut', (req, res) => {
  console.log('ok')
  req.session.destroy()
  logout()
  res.send()
})

module.exports = router
