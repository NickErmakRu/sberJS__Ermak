const express = require('express')
const passport = require('passport')
const controller = require('../controllers/controller.posts')
const router = express.Router()
// const upload = require('../middleware/upload')

const m = require('../checks/middlewares')

router.get('/', controller.getAllPosts)
router.get('/:id', m.mustBeInteger, controller.getPostById)
router.post('/', m.checkFieldsPost, controller.createPost)
router.put('/:id', m.mustBeInteger, m.checkFieldsPost, controller.updatePost)
router.delete('/:id', passport.authenticate('jwt', {session: false}), m.mustBeInteger, controller.deletePost)

//upload.array('image',2)
// passport.authenticate('jwt', {session: false}),

module.exports = router
