// Database schema for Amazon Project

const mongoose = require('mongoose');
const { Schema } = mongoose;

const Item = new Schema({
  item_name: { type: String, default: "test" },
  item_description: { type: String, default: "test" },
  image_url: { type: String, default: "" },
  item_price: { type: Number, default: 5 },
  quantity: { type: Number, default: 5 },
  sold_by: { type: String, default: "test" }, // list of seller_ids
  category_name: { type: String, default: "test" },
  reviews: [String], // item_ids
  avg_rating: {type: Number, default: 0}
});
module.exports = mongoose.model('items', Item)
