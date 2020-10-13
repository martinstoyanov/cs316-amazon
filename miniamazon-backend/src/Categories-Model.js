// Database schema for Amazon Project

  const mongoose = require('mongoose');
  const { Schema } = mongoose;

  // Categories: (category_name)
  const categories = new Schema({
    category_name: String,
    // recommendations
    item_id1: Number,
    item_id2: Number,
    item_id3: Number
  });
