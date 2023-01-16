const express = require('express')
const cors = require('cors')
const projetsRoutes = require('./routes/participants')

const app = express()

app.use(express.json())
app.use(cors())

app.use('/api/projets', projetsRoutes)

module.exports = app
