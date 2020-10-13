// Database schema for Amazon Project

  const mongoose = require('mongoose');
  const { Schema } = mongoose;

  // Reviews: (review_id, item_id, user_id, review_rating, review_notes)
  const reviews = new Schema({
    review_id: String,
    item_id: Number,
    user_id: String,
    review_rating: Number,
    review_notes: String
  });
