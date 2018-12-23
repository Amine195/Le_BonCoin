// Express Router
const express = require("express");
const router = express.Router();

// Import UserController
const UserController = require('../controllers/userController');

// Routes
router.get("/dashboard", UserController.GetDashboard); // Dashboard
router.get("/profile", UserController.GetProfile); // Profile
router.get("/product", UserController.GetProduct); // Product
router.get("/shop", UserController.GetShop); // Shop
router.get("/offer", UserController.GetOffer); // Offer
router.get("/request", UserController.GetRequest); // Request

module.exports = router;
