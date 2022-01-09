const express = require("express")
const router = express.Router()
const {createProduct, getAllProducts, getProductDetails, deleteProduct, updateProduct} = require("../controller/productController")

router.post("/new", createProduct)
router.get("/products", getAllProducts)
router.route("/product/:id").put(getProductDetails)
.delete(deleteProduct).post(updateProduct)

module.exports = router