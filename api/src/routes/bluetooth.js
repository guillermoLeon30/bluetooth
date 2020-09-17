const express = require('express')

const bluetoothController = require('../controller/bluetoothController')

const router = express.Router()

// POST /bluetooth/
router.post('/', bluetoothController.postData)

module.exports = router
