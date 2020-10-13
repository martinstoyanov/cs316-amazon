// Database schema for Amazon Project

  const mongoose = require('mongoose');
  const { Schema } = mongoose;

  const orders = new Schema({
    order_id: String,
    order_address: String,
    order_payment: String,
    order_price: Number,
    order_status: String,
    order_date: Date,
    delivery_date: Date,
    cart_id: String
  });
