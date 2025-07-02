const mongoose = require('mongoose');

const aboutSchema = new mongoose.Schema({
    AboutMe: { type: String, required: true },
    ResumeLink: { type: String, required: true }
});

module.exports = mongoose.model('About', aboutSchema);