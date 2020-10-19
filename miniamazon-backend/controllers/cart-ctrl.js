const Cart = require('../src/Carts-Model')

createCart = (req, res) => {
    const body = req.body

    if (!body) {
        return res.status(400).json({
            success: false,
            error: 'You must provide a cart',
        })
    }

    const cart = new Cart(body)

    if (!cart) {
        return res.status(400).json({ success: false, error: err })
    }

    cart
        .save()
        .then(() => {
            return res.status(201).json({
                success: true,
                cart_id: cart._id,
                message: 'Cart created!',
            })
        })
        .catch(error => {
            return res.status(400).json({
                error,
                message: 'Cart not created!',
            })
        })
}

updateCart = async (req, res) => {
    const body = req.body

    if (!body) {
        return res.status(400).json({
            success: false,
            error: 'You must provide a body to update',
        })
    }

    Cart.findOne({ _id: req.params.id }, (err, cart) => {
        if (err) {
            return res.status(404).json({
                err,
                message: 'Cart not found!',
            })
        }
        cart.user_id = body.user_id
        cart.items = body.items
        cart
            .save()
            .then(() => {
                return res.status(200).json({
                    success: true,
                    id: cart._id,
                    message: 'Cart updated!',
                })
            })
            .catch(error => {
                return res.status(404).json({
                    error,
                    message: 'Cart not updated!',
                })
            })
    })
}

deleteCart = async (req, res) => {
    await Cart.findOneAndDelete({ _id: req.params.id }, (err, cart) => {
        if (err) {
            return res.status(400).json({ success: false, error: err })
        }

        if (!cart) {
            return res
                .status(404)
                .json({ success: false, error: `Cart not found` })
        }

        return res.status(200).json({ success: true, data: cart })
    }).catch(err => console.log(err))
}

getCartById = async (req, res) => {
    await Cart.findOne({ _id: req.params.id }, (err, cart) => {
        if (err) {
            return res.status(400).json({ success: false, error: err })
        }

        if (!cart) {
            return res
                .status(404)
                .json({ success: false, error: `Cart not found` })
        }
        return res.status(200).json({ success: true, data: cart })
    }).catch(err => console.log(err))
}

getCarts = async (req, res) => {
    await Cart.find({}, (err, carts) => {
        if (err) {
            return res.status(400).json({ success: false, error: err })
        }
        if (!carts.length) {
            return res
                .status(404)
                .json({ success: false, error: `Cart not found` })
        }
        return res.status(200).json({ success: true, data: carts })
    }).catch(err => console.log(err))
}

module.exports = {
    createCart,
    updateCart,
    deleteCart,
    getCarts,
    getCartById,
}