-- Database schema for Amazon Project

-- User (Buyers): (user_id, user_name, user_email, user_password)
create table Users(
user_id VARCHAR(32) not null primary key,
username VARCHAR(32) not null,
user_email VARCHAR(32) not null,
user_password VARCHAR(32) not null,
balance decimal default 0.0
);

-- # Sellers: (seller_id, seller_name, seller_email, seller_password)
create table Sellers(
seller_id VARCHAR(32) not null primary key,
seller_name VARCHAR(32) not null,
seller_email VARCHAR(32) not null,
seller_password VARCHAR(32) not null
);

-- Items: (item_id, item_name, item_image, item_description, item_price)
create table Items(
item_id integer not null primary key,
item_name VARCHAR(64) not null,
item_description VARCHAR(400),
item_price decimal not null
);

-- Categories: (category_name)
create table Categories(
category_name VARCHAR(64) not null primary key
);

-- Carts: (cart_id)
create table Carts(
cart_id integer not null primary key
);

-- Orders: (order_id, cart_id, order_address, order_payment, order_price, order_status, order_date, delivery_date)
create table Orders(
order_id integer not null primary key,
order_address VARCHAR(64) not null,
order_payment VARCHAR(64) not null,
order_price decimal not null,
order_status VARCHAR(32) not null,
order_date date not null,
delivery_date date not null
);

-- Reviews: (review_id, item_id, user_id, review_rating, review_notes)
-- ensure that review is not the seller
create table Reviews(
review_id VARCHAR(32) not null primary key,
item_id integer not null check
	(item_id in (select item_id from Items),
user_id VARCHAR(32) not null check
	(user_id in (select user_id from Users),
review_rating decimal not null check
	(review_rating >= 0 and review_rating <= 5),
review_notes VARCHAR(400) not null
);

-- Recommendations: (category_name, item_id1, item_id2, item_id3)
create table Recommendations(
category_name VARCHAR(64) not null primary key,
item_id1 integer,
item_id2 integer,
item_id3 integer
);

-- SoldBy: (item_id, seller_id)
create table SoldBy(
item_id integer not null check
	(item_id in (select item_id in Items)),
seller_id VARCHAR(32) not null check
	(seller_id in (select seller_id in Sellers)),
primary key(item_id, seller_id)
);

-- BelongsTo: (item_id, category_name)
create table BelongsTo(
item_id integer not null check
	(item_id in (select item_id in Items)),
category_name VARCHAR(32) check
	(category_name in (select category_name from Categories)),
primary key(item_id, category_name),
);

-- AreIn: (item_id, cart_id)
create table AreIn(
item_id integer not null check
	(item_id in (select item_id from Items)),
cart_id integer not null check
	(cart_id in (select cart_id from Carts)),
primary key(item_id, category_name)
);

-- PurchasedBy: (user_id, cart_id)
create table PurchasedBy(
user_id integer not null check
	(user_id in (select user_id from Users)),
cart_id integer not null check
	(cart_id in (select cart_id from Carts)),
primary key(user_id, cart_id)
);

-- Constraints:
-- An item cannot belong in more than one category [done]
-- A User can only have one cart at a time
-- !!! Sellers cannot modify/delete Reviews --> do this in the update code itself?

-- Assumptions:
-- A Seller can Sell many Items and two different Sellers can Sell the same Item
-- Reviews are about Items that are sold by different Sellers. Therefore the Buyer Reviews the Seller for each Item.
-- A Buyer can Write many Reviews of the same Item. Buyers can Purchase many Carts.
-- An Item can only BelongTo exactly one Category. Many Items AreIn one Cart.
-- There are 3 item Recommendations per each Category.
-- Orders is a type of Cart and includes the information (attributes) need to complete the Order

