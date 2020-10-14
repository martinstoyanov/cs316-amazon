// Database schema for Amazon Project

const mongoose = require('mongoose');
const { Schema } = mongoose;

const Cart = new Schema({
	user_id: String,
	items: [String] // item_ids
});

module.exports = mongoose.model('carts', Cart)