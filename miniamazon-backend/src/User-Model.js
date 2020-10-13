  const mongoose = require('mongoose');
  const { Schema } = mongoose;

  // User (Buyers): (user_id, user_name, user_email, user_password)
  const users = new Schema({
    user_id: String,
    user_name: String,
    username: String,
    user_email: String,
    user_password: String
  });
