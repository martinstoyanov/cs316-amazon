// Database schema for Amazon Project

const mongoose = require('mongoose');
const { Schema } = mongoose;

const Seller = new Schema({
	seller_name: String,
	seller_email: String,
	seller_password: String
});

module.exports = mongoose.model('sellers', Seller)