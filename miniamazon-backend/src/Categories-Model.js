// Database schema for Amazon Project

const mongoose = require('mongoose');
const { Schema } = mongoose;

const Category = new Schema({
	category_name: { type: String, default: "test" }
});

module.exports = mongoose.model('categories', Category)