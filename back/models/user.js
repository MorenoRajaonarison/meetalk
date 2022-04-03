const {Schema, model} = require('mongoose')

const userSchema = new Schema({
    email: {
        type: String,
        unique: true
    },
    username: {
        type: String
    },
    password: {
        type: String
    }
})

module.exports = model("user", userSchema)