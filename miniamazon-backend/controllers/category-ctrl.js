const Category = require('../src/Categories-Model')

createCategory = (req, res) => {
    const body = req.body

    if (!body) {
        return res.status(400).json({
            success: false,
            error: 'You must provide a category',
        })
    }

    const category = new Category(body)

    if (!category) {
        return res.status(400).json({ success: false, error: err })
    }

    category
        .save()
        .then(() => {
            return res.status(201).json({
                success: true,
                category_id: category._id,
                message: 'Category created!',
            })
        })
        .catch(error => {
            return res.status(400).json({
                error,
                message: 'Category not created!',
            })
        })
}

updateCategory = async (req, res) => {
    const body = req.body

    if (!body) {
        return res.status(400).json({
            success: false,
            error: 'You must provide a body to update',
        })
    }

    Category.findOne({ _id: req.body._id }, (err, category) => {
        if (err) {
            return res.status(404).json({
                err,
                message: 'Category not found!',
            })
        }
        category.category_name = body.category_name
        category.item1_id = body.item1_id
        category.item1_avg_rating = body.item1_avg_rating
        category.item2_id = body.item2_id
        category.item2_avg_rating = body.item2_avg_rating
        category.item3_id = body.item3_id
        category.item3_avg_rating = body.item3_avg_rating
        
        category
            .save()
            .then(() => {
                return res.status(200).json({
                    success: true,
                    id: category._id,
                    message: 'Category updated!',
                })
            })
            .catch(error => {
                return res.status(404).json({
                    error,
                    message: 'Category not updated!',
                })
            })
    })
}

deleteCategory = async (req, res) => {
    await Category.findOneAndDelete({ _id: req.params.id }, (err, category) => {
        if (err) {
            return res.status(400).json({ success: false, error: err })
        }

        if (!category) {
            return res
                .status(404)
                .json({ success: false, error: `Category not found` })
        }

        return res.status(200).json({ success: true, data: category })
    }).catch(err => console.log(err))
}

getCategoryById = async (req, res) => {
    await Category.findOne({ _id: req.params.id }, (err, category) => {
        if (err) {
            return res.status(400).json({ success: false, error: err })
        }

        if (!category) {
            return res
                .status(404)
                .json({ success: false, error: `Category not found` })
        }
        return res.status(200).json({ success: true, data: category })
    }).catch(err => console.log(err))
}

getCategories = async (req, res) => {
    await Category.find({}, (err, categories) => {
        if (err) {
            return res.status(400).json({ success: false, error: err })
        }
        if (!categories.length) {
            return res
                .status(404)
                .json({ success: false, error: `Category not found` })
        }
        return res.status(200).json({ success: true, data: categories })
    }).catch(err => console.log(err))
}

module.exports = {
    createCategory,
    updateCategory,
    deleteCategory,
    getCategories,
    getCategoryById,
}