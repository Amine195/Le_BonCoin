// Express Router
const express = require("express");
const router = express.Router();

// Import ProductController
const ProductController = require('../controllers/productController');

// View Product
router.get("/liste", ProductController.Liste); // Product Liste
router.get("/grid", ProductController.Grid); // Product Grid
router.get("/detail", ProductController.Detail); // Product Detail

// Action Product
router.get("/add", ProductController.Add); // Add Product
  
module.exports = router;