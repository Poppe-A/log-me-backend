var express = require('express')
var router = express.Router()

const {
  getUserSports,
  getSportExercises,
  getSportSessions,
  addSport,
  addExercise,
  finishSession,
} = require('../controllers/sportController')

router.get('/getUserSports', getUserSports)
router.get('/getSportExercises', getSportExercises)
router.get('/getSportSessions', getSportSessions)
router.post('/addSport', addSport)
router.post('/addExercise', addExercise)
router.post('/finishSession', finishSession)

function checkAuthenticated(req, res, next) {
  if (req.isAuthenticated()) {
    return next()
  }

  res.redirect('/login')
}
module.exports = router
