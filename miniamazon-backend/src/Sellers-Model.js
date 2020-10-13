// Database schema for Amazon Project

  const mongoose = require('mongoose');
  const { Schema } = mongoose;

  const sellers = new Schema({
    seller_id: String,
    seller_name: String,
    seller_email: String,
    seller_password: String
  });
