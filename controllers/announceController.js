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

// GET add product Controller
exports.Add = (req, res) => {
    res.render("action/add_announce", {
        path: "/dashboard",
        PageTitle: "add Annouces Page"
    });
};