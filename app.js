// Required NPM
const path = require("path");
const express = require("express");
const chalk = require("chalk");
const debug = require("debug")("app");
const morgan = require("morgan");

// Init App
const app = express();

// Bring PORT
const port = process.env.PORT || 3000;

// Bring Middleware
app.use(morgan("dev"));

// Bring EJS Template
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

// Bring Routes
const productRoutes = require("./routes/product");
const userRoutes = require("./routes/user");

// Static Folder
app.use(express.static(path.join(__dirname, "/public/")));
app.use("/css", express.static(path.join(__dirname, "/node_modules/bootstrap/dist/css")));
app.use("/js", express.static(path.join(__dirname, "/node_modules/bootstrap/dist/js")));
app.use("/js", express.static(path.join(__dirname, "/node_modules/jquery/dist")));
app.use("/js", express.static(path.join(__dirname, "/node_modules/popper.js/dist/umd")));

// Using Routes
app.get("/", (req, res) => {
  res.render("index");
});
app.use("/product", productRoutes);
app.use("/user", userRoutes);

// Server Listening
app.listen(port, () => {
  debug(`Server Running on PORT ${chalk.green(port)}`);
});
