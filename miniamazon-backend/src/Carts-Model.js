// Database schema for Amazon Project

  const mongoose = require('mongoose');
  const { Schema } = mongoose;

  // Carts: (cart_id)
  const carts = new Schema({
    cart_id: Number,
    items: [Number] // item_ids
  });
