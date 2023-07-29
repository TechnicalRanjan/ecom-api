const mongoose = require('mongoose');

//create product schema

const productSchema = mongoose.Schema({
    name: String,
    image: String,
    countInStock: {
        type: Number,
        required: true,
    },
});

const Product = mongoose.model('Product', productSchema);

module.exports = Product;
