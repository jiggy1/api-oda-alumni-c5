const express = require('express')
const db = require('./config/mysqlConn')
const participantsRoutes = require('./routes/participants')

const app = express()

app.use(express.json())

app.use('/api/participants', participantsRoutes)

module.exports = app
