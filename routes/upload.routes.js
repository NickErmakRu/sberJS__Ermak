const express = require('express')
// const passport = require('passport')
const controller = require('../controllers/controller.upload')
const router = express.Router()
const upload = require('../middleware/upload')


// router.get('/', controller.getAllPosts)
// router.get('/:id', m.mustBeInteger, controller.getPostById)

router.post('/', upload.array('image',2), controller.uploadImg)

//upload.array('image',2)
// passport.authenticate('jwt', {session: false}),

module.exports = router
