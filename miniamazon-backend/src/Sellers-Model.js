// Database schema for Amazon Project

const mongoose = require('mongoose');
const { Schema } = mongoose;

const Seller = new Schema({
	seller_name: { type: String, default: "test" },
	seller_email: { type: String, default: "test" },
	seller_password: { type: String, default: "test" }
});

module.exports = mongoose.model('sellers', Seller)