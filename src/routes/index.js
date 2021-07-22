const express = require('express')
const loginRoute = require('./loginRoute')
const sportRoute = require('./sportRoute')
const router = express.Router()

router.use('/login', loginRoute)
router.use('/sport', sportRoute)

module.exports = router
