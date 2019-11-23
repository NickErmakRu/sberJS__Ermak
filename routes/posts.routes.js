const express = require('express')
const controller = require('../controllers/controller.posts')
const router = express.Router()

const m = require('../checks/middlewares')

router.get('/', controller.getAllPosts)
router.get('/:id', m.mustBeInteger, controller.getPostById)
router.post('/', m.checkFieldsPost, controller.createPost)
router.put('/:id', m.mustBeInteger, m.checkFieldsPost, controller.updatePost)
router.delete('/:id', m.mustBeInteger, controller.deletePost)

module.exports = router
