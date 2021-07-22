const mongoose = require('mongoose')
const sessionExercise = new mongoose.Schema({
  name: String,
  result: [Number],
})

module.exports = mongoose.model('SessionExercise', sessionExercise)
