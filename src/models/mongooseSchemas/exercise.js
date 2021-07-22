const mongoose = require('mongoose')
const exercise = new mongoose.Schema({
  name: String,
  sportName: String,
  type: [],
})

module.exports = mongoose.model('Exercise', exercise)
