const Seller = require('../src/Sellers-Model')

createSeller = (req, res) => {
    const body = req.body

    if (!body) {
        return res.status(400).json({
            success: false,
            error: 'You must provide an seller',
        })
    }

    const seller = new Seller(body)

    if (!seller) {
        return res.status(400).json({ success: false, error: err })
    }

    seller
        .save()
        .then(() => {
            return res.status(201).json({
                success: true,
                seller_id: seller._id,
                message: 'Seller created!',
            })
        })
        .catch(error => {
            return res.status(400).json({
                error,
                message: 'Seller not created!',
            })
        })
}

updateSeller = async (req, res) => {
    const body = req.body

    if (!body) {
        return res.status(400).json({
            success: false,
            error: 'You must provide a body to update',
        })
    }

    Seller.findOne({ _id: req.params.seller_id }, (err, seller) => {
        if (err) {
            return res.status(404).json({
                err,
                message: 'Seller not found!',
            })
        }
        seller.seller_name = body.seller_name
        seller.seller_description = body.seller_description
        seller.seller_price = body.seller_price
        seller.sold_by = body.sold_by
        seller.category_name = body.category_name
        seller
            .save()
            .then(() => {
                return res.status(200).json({
                    success: true,
                    id: seller._id,
                    message: 'Seller updated!',
                })
            })
            .catch(error => {
                return res.status(404).json({
                    error,
                    message: 'Seller not updated!',
                })
            })
    })
}

deleteSeller = async (req, res) => {
    await Seller.findOneAndDelete({ _id: req.params.id }, (err, seller) => {
        if (err) {
            return res.status(400).json({ success: false, error: err })
        }

        if (!seller) {
            return res
                .status(404)
                .json({ success: false, error: `Seller not found` })
        }

        return res.status(200).json({ success: true, data: seller })
    }).catch(err => console.log(err))
}

getSellerById = async (req, res) => {
    await Seller.findOne({ _id: req.params.id }, (err, seller) => {
        if (err) {
            return res.status(400).json({ success: false, error: err })
        }

        if (!seller) {
            return res
                .status(404)
                .json({ success: false, error: `Seller not found` })
        }
        return res.status(200).json({ success: true, data: seller })
    }).catch(err => console.log(err))
}

getSellers = async (req, res) => {
    await Seller.find({}, (err, sellers) => {
        if (err) {
            return res.status(400).json({ success: false, error: err })
        }
        if (!sellers.length) {
            return res
                .status(404)
                .json({ success: false, error: `Seller not found` })
        }
        return res.status(200).json({ success: true, data: sellers })
    }).catch(err => console.log(err))
}

module.exports = {
    createSeller,
    updateSeller,
    deleteSeller,
    getSellers,
    getSellerById,
}