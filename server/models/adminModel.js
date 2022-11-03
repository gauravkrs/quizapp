const { Schema, model } = require("mongoose");

const adminSchema = new Schema({
    name: String,
    email: String,
    password: String,
})

const admin = model("admin", adminSchema)

module.exports = admin;