const filename = '../data/users.json'
const path = require('path')
const configPath = path.join(__dirname, filename)

let data = require(filename)
let users = data

const check = require('../checks/check.js')

function getAllUsers() {
    return new Promise((resolve, reject) => {
        if (users.length === 0) {
            reject({
                message: 'no posts available',
                status: 202
            })
        }
        resolve(users);
    })
}

function createUser(newUser) {
    return new Promise((resolve, reject) => {
        const id = { id: check.getNewId(users) }
        newUser = { ...id, ...newUser }

        users.push(newUser)
        check.writeJSONFile(configPath, users)
        resolve(newUser)
    })
}

module.exports = {
    getAllUsers,
    createUser
}
