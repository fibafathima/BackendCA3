const mongoose = require('mongoose')

const UserSchema = new mongoose.Schema({
    email:{
        type:String,
        required:true
    },
    password:{
        required:true
    }
})

const UserModel = mongoose.model("User",UserSchema)
module.exports = UserModel;