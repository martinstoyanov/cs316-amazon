const mongoose = require('mongoose');
const { Schema } = mongoose;

const User = new Schema({
	user_name: {type: String, default: "test"},
	username: {type: String, default: "test"},
	user_email: { type: String, default: "test" },
	user_password: { type: String, default: "test" },
	orders: [String],
	balance: { type: Number, default: 0.0 }
});

module.exports = mongoose.model('users', User)
