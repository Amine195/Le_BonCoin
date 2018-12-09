// GET product Liste Controller
exports.Liste = (req, res) => {
    res.render("product/liste", {
        path: "/products",
        PageTitle: "products Page Liste"
    });
};

// GET product Grid Controller
exports.Grid = (req, res) => {
    res.render("product/grid", {
        path: "/products",
        PageTitle: "products Page Grid"
    });
};

// GET product Detail Controller
exports.Detail = (req, res) => {
    res.render("product/detail", {
        path: "/products",
        PageTitle: "products Page Detail"
    });
};