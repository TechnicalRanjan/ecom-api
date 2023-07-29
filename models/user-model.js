const mongoose = require('mongoose');

//create product schema

const userSchema = mongoose.Schema({});

const User = mongoose.model('User', userSchema);

module.exports = User;
