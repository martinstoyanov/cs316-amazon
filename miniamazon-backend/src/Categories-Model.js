// Database schema for Amazon Project

  const mongoose = require('mongoose');
  const { Schema } = mongoose;

  const categories = new Schema({
    category_name: String,
    item_ids: [String]
  });
