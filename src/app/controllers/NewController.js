const Course = require('../model/course');
const { mongooseToObject } = require('../../util/mongoose');

class newController {
    //get   new/strote/courses
    New(req, res, next) {
        // res.render('news/create');
        res.render('new/store-news');
    }
}

module.exports = new newController();
