const SportModel = require('../models/sportModel')

const getUserSports = async (req, res) => {
  try {
    const result = await SportModel.getUserSports(req.user)
    res.status(200).json(result)
  } catch (err) {
    res.status(500).json(err)
  }
}

const getSportExercises = async (req, res) => {
  const { sport } = req.query

  try {
    const result = await SportModel.getSportExercises(req.user, sport)
    res.status(200).json(result)
  } catch (err) {
    res.status(500).json(err)
  }
}

const getSportSessions = async (req, res) => {
  const { sport } = req.query
  try {
    const result = await SportModel.getSportSessions(req.user, sport)
    res.status(200).json(result)
  } catch (err) {
    res.status(500).json(err)
  }
}

const addSport = async (req, res) => {
  const { sport } = req.query
  try {
    const result = await SportModel.addSport(req.user, sport)
    res.status(200).json(result)
  } catch (err) {
    res.status(500).json(err)
  }
}

const addExercise = async (req, res) => {
  const { exercise } = req.body
  try {
    const result = await SportModel.addExercise(req.user, exercise)
    res.status(200).json(result)
  } catch (err) {
    res.status(500).json(err)
  }
}

const finishSession = async (req, res) => {
  const { session } = req.body
  try {
    const result = await SportModel.finishSession(req.user, session)
    res.status(200).json(result)
  } catch (err) {
    res.status(500).json(err)
  }
}

module.exports = {
  getUserSports,
  getSportExercises,
  getSportSessions,
  addSport,
  addExercise,
  finishSession,
}
