const express = require("express")
const errorMiddleware = require("./middleware/error")
const app = express()
app.use(express.json());



// product route
const productRoutes = require("./routes/productRoutes")
app.use("/api/v1", productRoutes)


// Error Handling middleware
app.use(errorMiddleware)

module.exports = app