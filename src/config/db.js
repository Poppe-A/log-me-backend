const mongoose = require('mongoose')
require('dotenv').config()

const { DB_USER, DB_PASSWORD, DB_HOST, DB_PORT, DB_NAME } = process.env

mongoose.connect(
  `mongodb://${DB_USER}:${DB_PASSWORD}@${DB_HOST}:${DB_PORT}/${DB_NAME}`,
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    authSource: 'admin',
  }
)

const db = mongoose.connection
db.on('error', console.error.bind(console, 'connection error:'))
db.once('open', function () {
  console.log(`Connected to database`)
})

module.exports = db
