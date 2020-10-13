  const mongoose = require('mongoose');
  const { Schema } = mongoose;

  const users = new Schema({
    user_id: String,
    user_name: String,
    username: String,
    user_email: String,
    user_password: String
  });
