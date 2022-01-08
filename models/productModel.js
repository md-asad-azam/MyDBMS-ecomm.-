const mongoose = require("mongoose")

const productSchema = mongoose.Schema({
    name: {
        type: String,
        required: [true, "Please Enter Product's Name"]
    },
    description:{
        type: String,
        required:[true, "Please enter product's description"]
    },
    price:{
        type: Number,
        required:[true, "Please enter product's price"],
        maxLength: [8, "Price cannot exceed 8 characters"]
    },
    category:{
        type:String,
        required: [true, "Please enter product's category"]
    },
    rating:{
        type: Number,
        default: 0
    }
})

module.exports = mongoose.model("Products", productSchema)