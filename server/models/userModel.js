const { Schema, model } = require("mongoose");

const userSchema = new Schema({
    name: String,
    username: String,
    email: String,
    password: String,
})

const user = model("user", userSchema)

module.exports = user;