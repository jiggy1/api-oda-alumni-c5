const express = require('express')
const participantsCtlr = require('../controllers/participants')

const router = express.Router()

router.put('/api/participants', participantsCtlr.update)

module.exports = router
