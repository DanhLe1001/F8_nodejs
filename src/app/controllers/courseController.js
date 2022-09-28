const Course = require('../model/course');
const { mongooseToObject } = require('../../util/mongoose');

class courseController {
    //get course/:slug
    show(req, res, next) {
        Course.findOne({ slug: req.params.slug })
            .then((Course) => {
                res.render('courses/show', { Course: mongooseToObject(Course) });
            })
            .catch(next);
    }

    //get course/create
    create(req, res, next) {
        res.render('courses/create');
    }

    store(req, res, next) {
        const fromData = req.body;
        fromData.image = `https://i.ytimg.com/vi/${req.body.videoid}/maxresdefault.jpg`;
        const course = new Course(fromData);
        course
            .save()
            .then(() => res.redirect('/'))
            .catch((err) => {});
    }
}

module.exports = new courseController();
