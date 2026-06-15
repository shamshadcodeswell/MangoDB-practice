const mongoose = require("mongoose")
const subTodo = new mongoose.Schema({
    title : {
        type : String,
        required : true,
    },
    completed :{
        type : Boolean,
        default : false
    }, 
    createdBy : {
        type : mongoose.Schema.Types.ObjectId,
        ref : "User" 
    }
},{timestamps:true})
module.exports = mongoose.model("SubTodo", subTodo)