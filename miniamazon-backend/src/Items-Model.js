// Database schema for Amazon Project

  const mongoose = require('mongoose');
  const { Schema } = mongoose;

  const items = new Schema({
    item_id: String,
    item_name: String,
    item_description: String,
    item_price: Number,
    sold_by: [String], // list of seller_ids
    category_name: String
  });
