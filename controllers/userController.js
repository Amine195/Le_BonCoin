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
        PageTitle: "My Profile Page"
    });
}

// GET Product Controller
exports.GetProduct = (req, res) => {
    res.render("user/product", {
        path: "/dashboard",
        PageTitle: "My Product Page"
    });
}

// GET Shop Controller
exports.GetShop = (req, res) => {
    res.render("user/shop", {
        path: "/dashboard",
        PageTitle: "My Shop Page"
    });
}

// GET Announce Controller
exports.GetAnnounce = (req, res) => {
    res.render("user/announce", {
        path: "/dashboard",
        PageTitle: "My Announce Page"
    });
}