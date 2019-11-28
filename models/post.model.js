const filename = '../data/posts.json'
const path = require('path')
const configPath = path.join(__dirname, filename)

let data = require(filename)
let posts = data

const check = require('../checks/check.js')

function getAllPosts() {
    return new Promise((resolve, reject) => {
        if (posts.length === 0) {
            reject({
                message: 'no posts available',
                status: 202
            })
        }
        resolve(posts);
    })
}

function getPostById(id) {
    return new Promise((resolve, reject) => {
        check.mustBeInArray(posts, id)
            .then(post => resolve(post))
            .catch(err => reject(err))
    })
}

function createPost(newPost, postFiles) {
    return new Promise((resolve, reject) => {
        const id = { id: check.getNewId(posts) }
        const tags = newPost.tags.split(', ', newPost.tags.length-1)
        delete newPost.tags

        const newPath = newPost.coverImage
        delete newPost.coverImage

        newPost = { ...id, tags, newPath, ...newPost }

        posts.unshift(newPost)
        check.writeJSONFile(configPath, posts)
        resolve(newPost)
    })
}

function updatePost(id, newPost) {
    return new Promise((resolve, reject) => {
        check.mustBeInArray(posts, id)
            .then(post => {
                const index = posts.findIndex(p => p.id == post.id)
                id = { id: post.id }

                const tags = newPost.tags.split(', ', newPost.tags.length-1)
                delete newPost.tags

                posts[index] = { ...id, tags, ...newPost }
                check.writeJSONFile(configPath, posts)
                resolve(posts[index])
            })
            .catch(err => reject(err))
    })
}

function deletePost(id) {
    return new Promise((resolve, reject) => {
        check.mustBeInArray(posts, id)
            .then( () => {

                posts = posts.filter(p => !(p.id == id))

                check.writeJSONFile(configPath, posts)
                resolve()
            })
            .catch(err => reject(err))
    })
}

module.exports = {
    getAllPosts,
    getPostById,
    createPost,
    updatePost,
    deletePost
}
