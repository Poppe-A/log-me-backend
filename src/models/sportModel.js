const User = require('./mongooseSchemas/user')

const getUserSports = (user) => {
  return new Promise((resolve, reject) => {
    User.findOne({ username: user.username }, 'sport')
      .then((result) => {
        resolve(result.sport)
      })
      .catch((e) => reject(e))
  })
}

const getSportSessions = (user, sport) => {
  return new Promise((resolve, reject) => {
    User.findOne({ username: user.username }, 'session')
      .then((result) => {
        if (sport !== 'all') {
          resolve(result.session.filter((elm) => elm.sport === sport))
        } else {
          resolve(result.session)
        }
      })
      .catch((e) => reject(e))
  })
}

const getSportExercises = (user, sport) => {
  return new Promise((resolve, reject) => {
    User.findOne({ username: user.username }, 'exercise')
      .then((res) => {
        resolve(res.exercise.filter((ex) => ex.sportName === sport))
      })
      .catch((e) => reject(e))
  })
}

const addSport = (user, sport) => {
  return new Promise((resolve, reject) => {
    User.updateOne(
      { username: user.username },
      { $push: { sport: { name: sport } } }
    )
      .then((result) => {
        resolve(result)
      })
      .catch((e) => {
        reject(e)
      })
  })
}

const addExercise = (user, exercise) => {
  return new Promise((resolve, reject) => {
    User.updateOne(
      { username: user.username },
      {
        $push: {
          exercise: {
            sportName: exercise.sport,
            type: exercise.type,
            exerciseName: exercise.name,
          },
        },
      }
    )
      .then((result) => {
        resolve(result)
      })
      .catch((e) => {
        reject(e)
      })
  })
}

const finishSession = (user, session) => {
  console.log('session', session)
  return new Promise((resolve, reject) => {
    User.updateOne(
      { username: user.username },
      {
        $push: {
          session: session,
        },
      }
    )
      .then((result) => {
        resolve(result)
      })
      .catch((e) => {
        reject(e)
      })
  })
}

module.exports = {
  getUserSports,
  getSportExercises,
  getSportSessions,
  addSport,
  addExercise,
  finishSession,
}
