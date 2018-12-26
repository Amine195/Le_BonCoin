// Express Router
const express = require("express");
const router = express.Router();

// Import AnnounceController
const AnnounceController = require('../controllers/announceController');

// View Announce
router.get("/liste", AnnounceController.Liste); // Announce Liste
router.get("/grid", AnnounceController.Grid); // Announce Grid

// Action Announce
// router.get("/add", AnnounceController.Add); // Add Announce
  
module.exports = router;