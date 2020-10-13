// Database schema for Amazon Project

  const mongoose = require('mongoose');
  const { Schema } = mongoose;

  const carts = new Schema({
    cart_id: String,
    user_id: String,
    items: [String] // item_ids
  });
