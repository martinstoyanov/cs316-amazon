const Item = require('../src/Items-Model')

createItem = (req, res) => {
    const body = req.body

    if (!body) {
        return res.status(400).json({
            success: false,
            error: 'You must provide an item',
        })
    }

    const item = new Item(body)

    if (!item) {
        return res.status(400).json({ success: false, error: err })
    }

    item
        .save()
        .then(() => {
            return res.status(201).json({
                success: true,
                item_id: item._id,
                message: 'Item created!',
            })
        })
        .catch(error => {
            return res.status(400).json({
                error,
                message: 'Item not created!',
            })
        })
}

updateItem = async (req, res) => {
    const body = req.body

    if (!body) {
        return res.status(400).json({
            success: false,
            error: 'You must provide a body to update',
        })
    }

    Item.findOne({ _id: req.body._id }, (err, item) => {
        if (err) {
            return res.status(404).json({
                err,
                message: 'Item not found!',
            })
        }
        item.item_name = body.item_name
        item.item_description = body.item_description
        item.item_price = body.item_price
        item.sold_by = body.sold_by
        item.category_name = body.category_name
        item.reviews = body.reviews
        item
            .save()
            .then(() => {
                return res.status(200).json({
                    success: true,
                    id: item._id,
                    message: 'Item updated!',
                })
            })
            .catch(error => {
                return res.status(404).json({
                    error,
                    message: 'Item not updated!',
                })
            })
    })
}

deleteItem = async (req, res) => {
    await Item.findOneAndDelete({ _id: req.params.id }, (err, item) => {
        if (err) {
            return res.status(400).json({ success: false, error: err })
        }

        if (!item) {
            return res
                .status(404)
                .json({ success: false, error: `Item not found` })
        }

        return res.status(200).json({ success: true, data: item })
    }).catch(err => console.log(err))
}

getItemById = async (req, res) => {
    await Item.findOne({ _id: req.params.id }, (err, item) => {
        if (err) {
            return res.status(400).json({ success: false, error: err })
        }

        if (!item) {
            return res
                .status(404)
                .json({ success: false, error: `Item not found` })
        }
        return res.status(200).json({ success: true, data: item })
    }).catch(err => console.log(err))
}

getItemsByName = async (req, res) => {
    
    await Item.find({ _id: req.params.item_name }, (err, items) => {
        if (err) {
            return res.status(400).json({ success: false, error: err })
        }
        console.log('asdffdfs')
        if (items.length < 1) {
            return res
                .status(404)
                .json({ success: false, error: `Item not found when searching by name` })
        }
        return res.status(200).json({ success: true, data: items })
    }).catch(err => console.log(err))

}

getItems = async (req, res) => {
    await Item.find({}, (err, items) => {
        if (err) {
            return res.status(400).json({ success: false, error: err })
        }
        if (!items.length) {
            return res
                .status(404)
                .json({ success: false, error: `Item not found` })
        }
        return res.status(200).json({ success: true, data: items })
    }).catch(err => console.log(err))
}

module.exports = {
    createItem,
    updateItem,
    deleteItem,
    getItems,
    getItemById,
    getItemsByName
}