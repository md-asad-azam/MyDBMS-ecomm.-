const ErrorHandler = require("../Error/errorHandler")

module.exports = (err, req, res, next) => {

    err.statusCode = err.statusCode || 500
    err.message = err.message || "Internal Server Error"

    // MongoDB wrong ID error
    if(err.name== "CastError"){
        const msg = `Resource not found. Invalid: ${err.path}`
        err = new ErrorHandler(msg, 400)
    }

    res.status(err.statusCode).json({
        success: false,
        message: err.message
    })

}