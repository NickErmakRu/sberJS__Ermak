function mustBeInteger(req, res, next) {
    const id = req.params.id
    if(!Number.isInteger(parseInt(id))) {
        res.status(400).json({ message: 'ID must be integer' })
    } else {
        next()
    }
}

function checkFieldsPost(req, res, next) {
    const {title, content, tags} = req.body
    if  (title && content && tags) {
        next()
    } else {
        res.status(400).json({ message: 'fields are not good' })
    }
}

function checkFieldsUser(req, res, next) {
    const {name, email, password} = req.body
    if  (name && email && password) {
        next()
    } else {
        res.status(400).json({ message: 'fields are not good' })
    }
}

module.exports = {
    mustBeInteger,
    checkFieldsPost,
    checkFieldsUser
}
