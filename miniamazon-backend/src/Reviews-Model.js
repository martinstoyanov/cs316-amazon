// Database schema for Amazon Project

const mongoose = require('mongoose');
const { Schema } = mongoose;

// Reviews: (review_id, item_id, user_id, review_rating, review_notes)
const Review = new Schema({
  item_id: { type: String, default: "test" },
  user_id: { type: String, default: "test" },
  review_rating: { type: Number, default: 5 },
  review_notes: { type: String, default: "test" }
});

module.exports = mongoose.model('reviews', Review)
