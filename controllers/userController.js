// GET Dashboard Controller
exports.GetDashboard = (req, res) => {
    res.render("user/dashboard", {
        path: "/dashboard",
        PageTitle: "My Dashboard Page"
    });
}

// GET Profile Controller
exports.GetProfile = (req, res) => {
    res.render("user/profile", {
        path: "/dashboard",
        road: "/profile",
        PageTitle: "My Profile Page"
    });
}

// GET Product Controller
exports.GetProduct = (req, res) => {
    res.render("user/product", {
        path: "/dashboard",
        road: "/product",
        PageTitle: "My Product Page"
    });
}

// GET Shop Controller
exports.GetShop = (req, res) => {
    res.render("user/shop", {
        path: "/dashboard",
        road: "/shop",
        PageTitle: "My Shop Page"
    });
}

// GET Announce Controller
exports.GetAnnounce = (req, res) => {
    res.render("user/announce", {
        path: "/dashboard",
        road: "/announce",
        PageTitle: "My announce Page"
    });
}