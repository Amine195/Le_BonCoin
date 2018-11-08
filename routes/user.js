const express = require("express");

const router = express.Router();

router.get("/register", (req, res) => {
  res.render("user/register", {
    path: "/register",
  });
});

router.get("/login", (req, res) => {
  res.render("user/login", {
    path: "/login",
  });
});

module.exports = router;
