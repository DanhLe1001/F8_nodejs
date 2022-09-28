const course = require('../model/course');
const { mongooseToObject } = require('../../util/mongoose');

class courseController {
    //get course/:slug
    show(req, res, next) {
        course
            .findOne({ slug: req.params.slug })
            .then((course) => {
                res.render('courses/show', { course: mongooseToObject(course) });
            })
            .catch(next);
    }
}

module.exports = new courseController();
