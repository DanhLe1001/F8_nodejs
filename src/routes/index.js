const newRoute = require('./news');
const newSite = require('./sites');
const courseSite = require('./courses');

function route(app) {
    // app.use('/abc', newRoute);
    app.use('/news', newRoute);
    app.use('/course', courseSite);
    app.use('/', newSite);
}

module.exports = route;
