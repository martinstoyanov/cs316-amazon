// Database schema for Amazon Project

const mongoose = require('mongoose');
const { Schema } = mongoose;

const Order = new Schema({
  order_address: { type: String, default: "test" },
  order_payment: { type: String, default: "test" },
  order_price: { type: Number, default: 5 },
  order_status: { type: String, default: "test" },
  order_date: {
    type: Date,
    // `Date.now()` returns the current unix timestamp as a number
    default: Date.now
  },
  delivery_date: {
    type: Date,
    // `Date.now()` returns the current unix timestamp as a number
    default: Date.now
  },
  user_id: { type: String, default: "test" },
  items: [[String, String]] // item_ids and count
});

module.exports = mongoose.model('orders', Order)