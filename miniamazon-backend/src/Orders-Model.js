// Database schema for Amazon Project

  const mongoose = require('mongoose');
  const { Schema } = mongoose;

  // Orders: (order_id, cart_id, order_address, order_payment, order_price, order_status, order_date, delivery_date)
  const orders = new Schema({
    order_id: Number,
    order_address: String,
    order_payment: String,
    order_price: Number,
    order_status: String,
    order_date: Date,
    delivery_date: Date,
    cart_id: Number
  });
