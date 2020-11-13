// Database schema for Amazon Project

const mongoose = require('mongoose');
const { Schema } = mongoose;

const Seller = new Schema({
	items: [String],
	items_sold: [[String, String]]
});

module.exports = mongoose.model('sellers', Seller)