const newRoute = require("./news");
const newSite = require("./sites");

function route(app) {
    // app.use("/abc", newRoute);
    app.use("/news", newRoute);

    app.use("/", newSite);
    // app.use("/a", newSite);
}

module.exports = route;
