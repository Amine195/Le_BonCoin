// GET Shop Liste Controller
exports.Liste = (req, res) => {
    res.render("shop/liste", {
        path: "/shops",
        PageTitle: "Shops Page Liste"
    });
};

// GET Shop Grid Controller
exports.Grid = (req, res) => {
    res.render("shop/grid", {
        path: "/shops",
        PageTitle: "Shops Page Grid"
    });
};

// GET Shop Detail Controller
exports.Detail = (req, res) => {
    res.render("shop/detail", {
        path: "/shops",
        PageTitle: "Shops Page Detail"
    });
};

// GET add product Controller
exports.Add = (req, res) => {
    res.render("action/add_shop", {
        path: "/dashboard",
        PageTitle: "add shops Page"
    });
};