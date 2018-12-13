// GET Dashboard Controller
exports.GetDashboard = (req, res) => {
    res.render("user/dashboard", {
        path: "/dashboard",
        PageTitle: "Dashboard Page"
    });
}

// GET Profile Controller
exports.GetProfile = (req, res) => {
    res.render("user/profile", {
        path: "/profile",
        PageTitle: "Profile Page"
    });
}