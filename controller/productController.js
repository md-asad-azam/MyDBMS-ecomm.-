const productCollection = require("../models/productModel")

exports.createProduct = async(req, res, next)=>{
    try{
        const product = await productCollection.create(req.body)
    
        res.status(200).json({
            success: true,
            product
        })
    }catch(err){
        res.status(400).json({success: false})
    }
    
}