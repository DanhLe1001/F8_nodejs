const course = require('../model/course');
const { mutipleMongooseToObject } = require('../../util/mongoose');

class SiteController {
    index(req, res) {
        course
            .find({})
            .then((course) => {
                res.render('home', { course: mutipleMongooseToObject(course) });
            })
            .catch((next) => next(err));
    }
    abcd(req, res) {
        res.send('nhau khong ban oi');
    }
}

module.exports = new SiteController();
