//to handle error in request body i.e. name

module.exports = (theFunc) => (req, res, next) => {
    Promise.resolve(theFunc(req, res, next)).catch(next)
}

// .catch(callback){
//     const e = new Error("the error we got in catch")
//     callback(e)
// } 