const mongoose = require('mongoose');

//create product schema

const categorySchema = mongoose.Schema({});

const Category = mongoose.model('Category', categorySchema);

module.exports = Category;
