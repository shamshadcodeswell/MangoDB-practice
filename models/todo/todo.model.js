const mongoose = require ('mongoose')
const todoSchema = new mongoose.Schema({
    category : {
        type : String,
        required : true,     
    },
    completed: {
        type : Boolean,
        default : false,
    },
    createdBy:{
        type : mongoose.Schema.Types.ObjectId,
        ref : "User" 
    },
    subTodos:[
       {
         type: mongoose.Schema.Types.ObjectId,
         ref : "SubTodo"
       }
    ]
},{timestamps : true})
module.exports = mongoose.model("Todo",todoSchema)