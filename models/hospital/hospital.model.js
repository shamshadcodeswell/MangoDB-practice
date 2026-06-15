const mongoose = require('mongoose')
const hospitalSchema = mongoose.Schema({
    name : {
        type : String,
        required: true
    },
    address : {
        type : String,
        required: true
    },
    specialization : {
        type : String,
        required: true
    },
    conatactNumber : {
        type : Number,
        required : true
    }
},{timestamps :true})
module.exports = mongoose.model("MedicalRecord",hospitalSchema)