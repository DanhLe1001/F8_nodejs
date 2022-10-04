class NewsController {
    index(req, res) {
        res.render('newpag');
    }
    abc(req, res) {
        res.send('abc 1111111');
    }
}

module.exports = new NewsController();
