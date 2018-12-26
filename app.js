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
const shopRoutes = require("./routes/shop");
const announceRoutes = require("./routes/announce");
const userRoutes = require("./routes/user");

// Static Folder
app.use(express.static(path.join(__dirname, "/public/")));

// Using Routes
app.get("/", (req, res) => {
  res.render("index", {
    path: "/",
    PageTitle: "Index Page"
  });
});

app.use("/product", productRoutes);
app.use("/shop", shopRoutes);
app.use("/announce", announceRoutes);
app.use("/user", userRoutes);

// Server Listening
app.listen(port, () => {
  debug(`Server Running on PORT ${chalk.green(port)}`);
});