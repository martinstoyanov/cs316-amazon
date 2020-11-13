// Database schema for Amazon Project

const mongoose = require('mongoose');
const { Schema } = mongoose;

const Category = new Schema({
	category_name: { type: String, default: "test" },
	// rec1: [[String, Number]], // item_ids and avg_rating
	// rec2: [[String, Number]], // item_ids and avg_rating
	// rec3: [[String, Number]] // item_ids and avg_rating
});

module.exports = mongoose.model('categories', Category)