// GET announce Liste Controller
exports.Liste = (req, res) => {
    res.render("announce/liste", {
        path: "/announces",
        PageTitle: "announces Page Liste"
    });
};

// GET announce Grid Controller
exports.Grid = (req, res) => {
    res.render("announce/grid", {
        path: "/announces",
        PageTitle: "announces Page Grid"
    });
};