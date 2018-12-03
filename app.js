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

// Bootstrap Config
app.use("/css", express.static(path.join(__dirname, "/node_modules/bootstrap/dist/css")));
app.use("/js", express.static(path.join(__dirname, "/node_modules/bootstrap/dist/js")));
app.use("/js", express.static(path.join(__dirname, "/node_modules/jquery/dist")));
app.use("/js", express.static(path.join(__dirname, "/node_modules/popper.js/dist/umd")));

// Font Awesome Config
app.use("/css", express.static(path.join(__dirname, "/node_modules/@fortawesome/fontawesome-free/css")));
app.use("/js", express.static(path.join(__dirname, "/node_modules/@fortawesome/fontawesome-free/js")));
app.use("/webfonts", express.static(path.join(__dirname, "/node_modules/@fortawesome/fontawesome-free/webfonts")));

// Using Routes
app.get("/", (req, res) => {
  res.render("index", {
    path: "/",
    PageTitle: "Index Page"
  });
});

app.get("/productsListe", (req, res) => {
  res.render("products_liste", {
    path: "/products",
    PageTitle: "Products Page Liste"
  });
});

app.get("/productsGrid", (req, res) => {
  res.render("products_grid", {
    path: "/products",
    PageTitle: "Products Page Gride"
  });
});

app.get("/shopsListe", (req, res) => {
  res.render("shops_liste", {
    path: "/shops",
    PageTitle: "Shops Page Liste"
  });
});

app.get("/shopsGrid", (req, res) => {
  res.render("shops_grid", {
    path: "/shops",
    PageTitle: "Shops Page Grid"
  });
});


app.use("/product", productRoutes);
app.use("/user", userRoutes);

// Server Listening
app.listen(port, () => {
  debug(`Server Running on PORT ${chalk.green(port)}`);
});
