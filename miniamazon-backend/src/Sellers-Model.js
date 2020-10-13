// Database schema for Amazon Project

  const mongoose = require('mongoose');
  const { Schema } = mongoose;

  // Sellers: (seller_id, seller_name, seller_email, seller_password)
  const sellers = new Schema({
    seller_id: String,
    seller_name: String,
    seller_email: String,
    seller_password: String
  });
