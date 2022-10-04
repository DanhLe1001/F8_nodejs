const newsRoute = require('./news');
const siteRoute = require('./sites');
const meRoute = require('./me');
const newRoute = require('./new');
const courseRoute = require('./courses');

function route(app) {
    // app.use('/abc', newRoute);
    app.use('/news', newsRoute);
    app.use('/courses', courseRoute);
    app.use('/me', meRoute);
    app.use('/new', newRoute);
    app.use('/', siteRoute);
}

module.exports = route;
