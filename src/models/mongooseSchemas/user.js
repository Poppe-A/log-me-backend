const mongoose = require('mongoose')
const user = new mongoose.Schema({
  username: String,
  password: String,
  sport: [],
  exercise: [],
  session: [],
})

module.exports = mongoose.model('User', user)
