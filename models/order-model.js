const mongoose = require('mongoose');

//create product schema

const orderSchema = mongoose.Schema({});

const Order = mongoose.model('Order', orderSchema);

module.exports = Order;
