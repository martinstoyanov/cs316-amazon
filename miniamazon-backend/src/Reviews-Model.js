// Database schema for Amazon Project

const mongoose = require('mongoose');
const { Schema } = mongoose;

// Reviews: (review_id, item_id, user_id, review_rating, review_notes)
const Review = new Schema({
  item_id: String,
  user_id: String,
  review_rating: Number,
  review_notes: String
});

module.exports = mongoose.model('reviews', Review)
