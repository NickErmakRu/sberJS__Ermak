const JwtStrategy = require('passport-jwt').Strategy
const ExtractJwt = require('passport-jwt').ExtractJwt
const keys = require('../checks/keys')

let users = require('../data/users.json')

const options = {
    jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
    secretOrKey: keys.jwt
}

module.exports = passport => {
    passport.use(
        new JwtStrategy(options, async (payload, done) => {
            try {
                const user = await users.filter((user) => {
                    user.id === payload.userId
                })
                if (user) {
                    done(null, user)
                } else {
                    done(null, false)
                    console.log('не найдено')
                }
            } catch (e) {
                console.log(e)
            }
        })
    )
}
