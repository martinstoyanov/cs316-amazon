// Database schema for Amazon Project

const mongoose = require('mongoose');
const { Schema } = mongoose;

const Order = new Schema({
  order_address: String,
  order_payment: String,
  order_price: Number,
  order_status: String,
  order_date: Date,
  delivery_date: Date,
  cart_id: String
});

module.exports = mongoose.model('orders', Order)