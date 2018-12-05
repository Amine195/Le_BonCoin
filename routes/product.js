// Express Router
const express = require("express");
const router = express.Router();

// Import ProductController
const ProductController = require('../controllers/ProductController');

router.get("/liste", ProductController.Liste); // Product Liste
router.get("/grid", ProductController.Grid); // Product Grid
router.get("/detail", ProductController.Detail); // Product Detail
  
module.exports = router;