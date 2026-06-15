const mongoose = require('mongoose')
const medicalRecordSchema = new mongoose.Schema({
    patient : {
        type : mongoose.Schema.Types.ObjectId,
        ref : 'Patient',
        required : true
    },
    doctor : {
        type : mongoose.Schema.Types.ObjectId,
        ref : 'Doctor',
        required : true
    },
    appointmentDate : {
        type : Date,
        required : true
    },
    testPrescribed : [{ 
        test : {
            type : String,
            required : true
        }
    }],
    medicinePrescribed : [{
        medicine : {
            type : String,
            required : true
        }
    }]

},{timestamps :true})
module.exports = mongoose.model("MedicalRecord",medicalRecordSchema)