const mongoose = require("mongoose");

const UserSchema = mongoose.Schema({
    username: {
        type: String,
    },
    name: {
        type: String
    },
    surname: {
        type: String
    },
    skills : {
        type : Array
    },
    created: { type: Date, default: Date.now },
})

module.exports = mongoose.model('Users', UserSchema)