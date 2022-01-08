const express = require("express")
const router = express.Router()
const {createProduct, getAllProducts, getProductDetails} = require("../controller/productController")

router.post("/new", createProduct)
router.get("/products", getAllProducts)
router.put("/product/:id", getProductDetails)

module.exports = router