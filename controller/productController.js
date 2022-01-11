const productCollection = require("../models/productModel")
const catchAsyncError = require("../Error/asyncError")
const ErrorHandler = require("../Error/errorHandler")
const apiFeatures = require("../middleware/apiFeatures")

// CREATE
exports.createProduct = catchAsyncError(async (req, res, next) => {

    const product = await productCollection.create(req.body)

    res.status(200).json({
        success: true,
        product
    })
})

// READ
exports.getAllProducts = catchAsyncError(async (req, res, next) => {

    const apiFeature = new apiFeatures(productCollection.find(), req.query).search()

    const product = await apiFeature.query
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

// UPDATE
exports.updateProduct = catchAsyncError(async (req, res, next) => {
    const product = await productCollection.findByIdAndUpdate(req.params.id, req.body, {new: true})

    if(!product)
        return next(new ErrorHandler("Product not found", 404))
        
    res.status(200).json({
        success: true,
        product
    })
})

// DELETE
exports.deleteProduct = catchAsyncError(async (req, res, next) => {
    const product = await productCollection.findByIdAndDelete(req.params.id)
    if(!product)
        return next(new ErrorHandler("Product not found", 404))

    res.status(200).json({
        success: true,
        message: "Product has been deleted successfully!"
    })
})