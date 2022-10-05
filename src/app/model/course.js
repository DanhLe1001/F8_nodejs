const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const slug = require('mongoose-slug-generator');
var mongooseDelete = require('mongoose-delete');
mongoose.plugin(slug);
const Course = new Schema(
    {
        name: { type: String, required: true },
        description: { type: String, max_length: 500 },
        image: { type: String },
        videoid: { type: String, required: true },
        level: { type: String, maxLength: 255 },
        slug: { type: String, slug: 'name', unique: true },
    },
    { timestamps: true },
);
// add plugin

Course.plugin(mongooseDelete, {
    deletedAt: true,
    overrideMethods: 'all',
});
module.exports = mongoose.model('Course', Course);
