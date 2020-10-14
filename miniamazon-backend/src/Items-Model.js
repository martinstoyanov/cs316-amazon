// Database schema for Amazon Project

const mongoose = require('mongoose');
const { Schema } = mongoose;

const Item = new Schema({
  item_name: String,
  item_description: String,
  item_price: Number,
  sold_by: [String], // list of seller_ids
  category_name: String
});
module.exports = mongoose.model('items', Item)
