const express = require('express')
const controller = require('../controllers/controller.users')
const router = express.Router()

const m = require('../checks/middlewares')

router.get('/', controller.getAllUsers)
router.post('/', m.checkFieldsUser, controller.createUser)

module.exports = router
