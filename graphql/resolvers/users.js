const User = require('../../models/User')

module.exports = {
    Mutation: {
        register(parent, args, context, info) {
            const {username, password, confirmPassword, email} = args
        }
    }
}