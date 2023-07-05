import mongoose from "mongoose"

const { Schema } = mongoose

const usersSchema = new Schema({
    username: {
        type: String,
        required: true
    },
    name: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    }
})

const User = mongoose.model("Users", usersSchema)
export {User}