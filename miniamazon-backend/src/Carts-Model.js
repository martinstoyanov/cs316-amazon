// Database schema for Amazon Project

const mongoose = require('mongoose');
const { Schema } = mongoose;

const Cart = new Schema({
	user_id: { type: String, default: "test" },
	items: [[String, String, Date]] // item_ids and count
});

module.exports = mongoose.model('carts', Cart)