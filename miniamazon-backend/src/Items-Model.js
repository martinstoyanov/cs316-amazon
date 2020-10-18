// Database schema for Amazon Project

const mongoose = require('mongoose');
const { Schema } = mongoose;

const Item = new Schema({
  item_name: { type: String, default: "test" },
  item_description: { type: String, default: "test" },
  item_price: { type: Number, default: 5 },
  sold_by: [String], // list of seller_ids
  category_name: { type: String, default: "test" }
});
module.exports = mongoose.model('items', Item)
