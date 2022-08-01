const express = require('express');
const router = express.Router()
const user = require("../controllers/userController")
const product = require("../controllers/productController")
const cart = require("../controllers/cartController")
const MW = require("../Middleware/auth")


//-------------------------------------User------------------------------------------------//

router.post("/register", user.createUser)

router.post("/login" , user.loginUser)

router.get("/user/:userId/profile",MW.authentication,user.getUser)

router.put("/user/:userId/profile",MW.authentication,user.updateUser)


//------------------------------------Product-------------------------------------------//

router.post("/products", product.createProduct)

router.get("/products" , product.getProduct)

router.get("/products/:productId", product.getProductById)

router.put("/products/:productId" , product.updateProductById)

router.delete("/products/:productId" , product.deleteProducts)


//-------------------------------cart Api------------------------------------------//

router.post("/users/:userId/cart" , cart.createCart)

router.put ("/users/:userId/cart" , cart.updateCart)

router.get("/users/:userId/cart" , cart.getCart)



module.exports = router;