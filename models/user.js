const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    name : {type: String, required: true},
    about : {type: String, required: true},
    status : {type: String, default: 'active'},
    phone : {type: Number},
    email : {type: String},
    github : {type: String},
    linkedin : {type: String}

});

module.exports = mongoose.model('User', userSchema);