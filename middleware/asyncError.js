//to handle error in request body i.e. name

exports.catchAsyncError = (theFunc)=>(req, res, next) => {
    Promise.resolve(theFunc(req, res, next)).catch(next)
}

// .catch(callback){
//     const e = new Error("the error we got in catch")
//     callback(e)
// } 