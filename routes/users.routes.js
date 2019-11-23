const express = require('express')
const controller = require('../controllers/controller.users')
const router = express.Router()

router.get('/', controller.getAllUsers)
router.post('/', controller.createUser)

module.exports = router
