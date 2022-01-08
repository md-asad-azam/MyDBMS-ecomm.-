const productCollection = require("../models/productModel")
const catchAsyncError = require("../Error/asyncError")
const ErrorHandler = require("../Error/errorHandler")

exports.createProduct = catchAsyncError(async (req, res, next) => {

    const product = await productCollection.create(req.body)

    res.status(200).json({
        success: true,
        product
    })
})

exports.getAllProducts = catchAsyncError(async (req, res, next) => {
    const product = await productCollection.find()
    if(!product)
    {
        return next(new ErrorHandler("No product available to diplay", 404))
    }
    res.status(200).json({
        success: true,
        product
    })
})

exports.getProductDetails = catchAsyncError(async (req, res, next) => {
    const product = await productCollection.findById(req.params.id)
    if(!product)
    {
        return next(new ErrorHandler("Product not found", 404))
    }
    res.status(200).json({
        success: true,
        product
    })
})