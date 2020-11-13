// Database schema for Amazon Project

const mongoose = require('mongoose');
const { Schema } = mongoose;

const Category = new Schema({
	category_name: { type: String, default: "test" },
	item1_id: { type: String, default: "test" },
	item1_avg_rating: { type: Number, default: 0 },
	item2_id: { type: String, default: "test" },
	item2_avg_rating: { type: Number, default: 0 },
	item3_id: { type: String, default: "test" },
	item3_avg_rating: { type: Number, default: 0 }

	// rec1: [[String, Number]], // item_ids and avg_rating
	// rec2: [[String, Number]], // item_ids and avg_rating
	// rec3: [[String, Number]] // item_ids and avg_rating
});

module.exports = mongoose.model('categories', Category)