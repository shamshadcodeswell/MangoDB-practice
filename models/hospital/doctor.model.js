const mongoose = require('mongoose')
const scheduleSchema = new mongoose.Schema({
        hospital : {
            type : mongoose.Schema.Types.ObjectId,
            ref : 'Hospital'
        },
        day : {
            type : String,
            required : true
        },
        hours : {
            type : Number,
            required : true
        } 
        
    })
const doctorSchema = new mongoose.Schema({
    name : {
        type : String,
        required : true
    },
    qualification : {
        type : String,
        required : true
    },
    experience : {
        type : Number,
        required : true
    },
    schedule : [scheduleSchema]
},{timestamps :true})
module.exports = mongoose.model("MedicalRecord",doctorSchema)