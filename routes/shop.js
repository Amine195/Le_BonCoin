// Express Router
const express = require("express");
const router = express.Router();

// Import ShopController
const ShopController = require('../controllers/shopController');

router.get("/liste", ShopController.Liste); // Shop Liste
router.get("/grid", ShopController.Grid); // Shop Grid
router.get("/detail", ShopController.Detail); // Shop Detail
  
module.exports = router;