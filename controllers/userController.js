// GET Profile Controller
exports.GetProfile = (req, res) => {
    res.render("user/profile", {
        path: "/profile",
        PageTitle: "Profile Page"
    });
}