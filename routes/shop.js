// Express Router
const express = require("express");
const router = express.Router();

// Import ShopController
const ShopController = require('../controllers/shopController');

// View Product
router.get("/liste", ShopController.Liste); // Shop Liste
router.get("/grid", ShopController.Grid); // Shop Grid
router.get("/detail", ShopController.Detail); // Shop Detail

// Action Product
router.get("/add", ShopController.Add); // Add Shop
  
module.exports = router;