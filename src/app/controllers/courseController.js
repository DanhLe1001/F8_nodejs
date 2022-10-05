const Course = require('../model/course');
const { mongooseToObject } = require('../../util/mongoose');

class courseController {
    store(req, res, next) {
        const fromData = req.body;
        fromData.image = `https://i.ytimg.com/vi/${req.body.videoid}/maxresdefault.jpg`;
        const course = new Course(fromData);
        course
            .save()
            .then(() => res.redirect('/me/store/courses'))
            .catch((err) => {
                res.send(err.message);
            });
    }
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
    //get course/:id/edit
    edit(req, res, next) {
        Course.findById(req.params.id)
            .then((Course) => {
                res.render('courses/edit', { Course: mongooseToObject(Course) });
            })
            .catch(next);
    }
    //put course/:id
    update(req, res, next) {
        Course.updateOne({ _id: req.params.id }, req.body)
            .then(() => res.redirect('/me/store/courses'))
            .catch(next);
    }
    //delete courses/:id
    destroy(req, res, next) {
        Course.delete({ _id: req.params.id })
            .then(() => res.redirect('back'))
            .catch(next);
    }
    //delete courses/:id/force
    forceDestroy(req, res, next) {
        Course.deleteOne({ _id: req.params.id })
            .then(() => res.redirect('back'))
            .catch(next);
    }

    //patch course/:id/strote
    restore(req, res, next) {
        Course.restore({ _id: req.params.id })
            .then(() => res.redirect('back'))
            .catch(next);
    }
}

module.exports = new courseController();
