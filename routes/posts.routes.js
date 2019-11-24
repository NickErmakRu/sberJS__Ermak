const express = require('express')
const passport = require('passport')
const controller = require('../controllers/controller.posts')
const router = express.Router()
const upload = require('../middleware/upload')

const m = require('../checks/middlewares')

router.get('/', controller.getAllPosts)
router.get('/:id', passport.authenticate('jwt', {session: false}), m.mustBeInteger, controller.getPostById)
router.post('/', upload.array('image',2), m.checkFieldsPost, controller.createPost)
router.put('/:id', upload.single('image'), m.mustBeInteger, m.checkFieldsPost, controller.updatePost)
router.delete('/:id', m.mustBeInteger, controller.deletePost)

module.exports = router
