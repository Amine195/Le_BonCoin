// Express Router
const express = require("express");
const router = express.Router();

// Import UserController
const UserController = require('../controllers/userController');

// Routes
router.get("/profile", UserController.GetProfile); // Profile

// Forgot Route
router.get("/forgot", (req, res) => {
    res.render("user/forgot", {
        PageTitle: "Forgot Page"
    });
});

// Reset Route
router.get("/reset", (req, res) => {
    res.render("user/reset", {
        PageTitle: "Reset Page"
    });
});

// Resend Route
router.get("/resend", (req, res) => {
    res.render("user/resend", {
        PageTitle: "Resend Page"
    });
});

module.exports = router;
