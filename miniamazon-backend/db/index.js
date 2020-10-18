const User = require('../src/User-Model')
const Seller = require('../src/Sellers-Model')
const Review = require('../src/Reviews-Model')
const Order = require('../src/Orders-Model')
const Item = require('../src/Items-Model')
const Category = require('../src/Categories-Model')
const Cart = require('../src/Carts-Model')


const mongoose = require('mongoose')

mongoose
    .connect('mongodb+srv://dbUser:dbUser@cluster0.3qz5d.mongodb.net/staging', { useNewUrlParser: true })
    .catch(e => {
        console.error('Connection error', e.message)
    })

const db = mongoose.connection

db.once('connected', async () => {
    console.error("connect success");

    // programmaticaly create DB at 1st run (so we can add dummy data)
    let user = new User()
    user.save()

    let s = new Seller()
    s.save()

    let r = new Review()
    r.save()

    let o = new Order()
    o.save()

    let i = new Item()
    i.save()

    let c = new Category()
    c.save()

    let cart = new Cart()
    cart.save()

});

module.exports = db