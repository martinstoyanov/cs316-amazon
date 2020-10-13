// Database schema for Amazon Project

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

// Sellers: (seller_id, seller_name, seller_email, seller_password)
  const sellers = new Schema({
    seller_id: String,
    seller_name: String,
    seller_email: String,
    seller_password: String
  });

// Items: (item_id, item_name, item_image, item_description, item_price)
  const items = new Schema({
    item_id: Number,
    item_name: String,
    item_description: String,
    item_price: Number
  });

// Categories: (category_name)
  const categories = new Schema({
    category_name: String
  });

// Carts: (cart_id)
  const carts = new Schema({
    cart_id: Number
  });

// Orders: (order_id, cart_id, order_address, order_payment, order_price, order_status, order_date, delivery_date)
  const orders = new Schema({
    order_id: Number,
    order_address: String,
    order_payment: String,
    order_price: Number,
    order_status: String,
    order_date: Date,
    delivery_date: Date
  });

// Reviews: (review_id, item_id, user_id, review_rating, review_notes)
  const reviews = new Schema({
    review_id: String,
    item_id: Number,
    user_id: String,
    review_rating: Number,
    review_notes: String
  });

// Recommendations: (category_name, item_id1, item_id2, item_id3)
  const Recommendations = new Schema({
    category_name: String,
    item_id1: Number,
    item_id2: Number,
    item_id3: Number
  });

// SoldBy: (item_id, seller_id)
  const SoldBy = new Schema({
    item_id: Number,
    seller_id: String
  });

// BelongsTo: (item_id, category_name)
  const BelongsTo = new Schema({
    item_id: Number,
    category_name: String
  });

// AreIn: (item_id, cart_id)
  const AreIn = new Schema({
    item_id: Number,
    cart_id: Number
  });

// PurchasedBy: (user_id, cart_id)
  const PurchasedBy = new Schema({
    user_id: Number,
    cart_id: Number
  });
