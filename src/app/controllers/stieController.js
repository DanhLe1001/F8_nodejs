class SiteController {
    index(req, res) {
        res.render("home");
    }
    abcd(req, res) {
        res.send("nhau khong ban oi");
    }
}

module.exports = new SiteController();
