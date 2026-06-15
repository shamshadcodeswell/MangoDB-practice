const mongoose = require('mongoose')
const patientSchema = mongoose.Schema({
    name : {
        type : String,
        required : true
    },
    age : {
        type : Number,
        required : true
    },
    gender : {
        type : String,
        enum : [ 'Male', 'Female', 'Others'],
        required : true
    },
    disease : {
        type : String,
        required : true
    }
},{timestamps :true})
module.exports = mongoose.model("MedicalRecord",patientSchema)