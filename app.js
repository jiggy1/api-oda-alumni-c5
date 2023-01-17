const express = require('express')
const cors = require('cors')
const projetsRoutes = require('./routes/participants')
const projetsRoute = require('./routes/projets')

const app = express()

app.use(express.json())
app.use(cors())

app.use('/api/projets', projetsRoutes)
app.use('/api/projets', projetsRoute)

module.exports = app
