// Express Router
const express = require("express");
const router = express.Router();

// Import UserController
const UserController = require('../controllers/userController');

// Routes
router.get("/profile", UserController.GetProfile); // Profile

module.exports = router;
