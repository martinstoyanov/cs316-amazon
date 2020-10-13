// Database schema for Amazon Project

  const mongoose = require('mongoose');
  const { Schema } = mongoose;

  // Items: (item_id, item_name, item_image, item_description, item_price)
  const items = new Schema({
    item_id: Number,
    item_name: String,
    item_description: String,
    item_price: Number,
    sold_by: [String], // list of seller_ids
    category_name: String
  });
