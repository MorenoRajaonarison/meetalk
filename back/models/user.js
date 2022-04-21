const {Schema, model} = require('mongoose')

const userSchema = new Schema({
    mail: {
        type: String,
        unique: true
    },
    username: {
        type: String
    },
    password: {
        type: String
    },
    friends: [{
        type: Schema.Types.Object, ref: 'user'
    }]
})

module.exports = model("user", userSchema)