const mongoose = require('mongoose')
const orderItemsSchema = mongoose.Schema({
    product :{
        type : mongoose.Schema.Types.ObjectId,
        ref : "product"
    },
    quantity : {
        type : Number,
        required : true,
    }
})
const orderSchema = mongoose.Schema({
    orderValue : {
        type : Number,
        required : true,
    },
    customer : {
        type : mongoose.Schema.Types.ObjectId,
        ref : "User"
    },
    items : {
        type : [orderItemsSchema]
    },
    address:{
        type : String,
        required : true,
    },
    status : {
        type : String,
        enum : ['pending', 'delivered', 'cancelled'],
        required : true
    }
},{timestamps : true});
module.exports = mongoose.model("Order", orderSchema )