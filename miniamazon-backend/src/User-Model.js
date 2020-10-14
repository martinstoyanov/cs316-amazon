const mongoose = require('mongoose');
const { Schema } = mongoose;

const User = new Schema({
	user_name: String,
	username: String,
	user_email: String,
	user_password: String
});

module.exports = mongoose.model('users', User)
