const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
  res.render("product/index", {
    PageTitle: "Product Page"
  });
});

router.get("/create", (req, res) => {
  res.render("product/create");
});

router.get("/show", (req, res) => {
  res.render("product/show");
});

router.get("/edit", (req, res) => {
  res.render("product/edit");
});

module.exports = router;
