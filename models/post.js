const mongoose = require('mongoose')
const {ObjectId} = mongoose.Schema.Types

const postSchema = new mongoose.Schema({
    title:{
        type:String,
        required:true
    },
    body:{
        type:String,
        required:true
    },
    post:{
        type:String,
        required:true
    },
    likes:[{
        type:ObjectId,
        ref:'users'
    }],
    comments:[{
        text:String,
        postedBy:{type:ObjectId,ref:"users"}
    }],
    postedBy:{
        type:ObjectId,
        ref:"users"
    }
})

module.exports = mongoose.model("Post",postSchema)
