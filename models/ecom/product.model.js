const mongoose = require ('mongoose')
const productSchema = mongoose.Schema({
    name : {
        type : String,
        required : true,
    },
    price : {
        type : Number,
        required : true,
    },
    category : {
        type : mongoose.Schema.Types.ObjectId,
        ref : 'Catrgory'
    },
    stock : {
        type : Number,
        default : 0,
        required : true,
    },
    review : 
        [{
            user :{
            type : mongoose.Schema.Types.ObjectId,
            ref : 'User'
            },
            reviewMessage : {
            type : String,
            required : true,
            }
        }]
    
},{timestamps : true})
module.exports = mongoose.model('Product', productSchema)