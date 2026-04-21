const {Product} = require('../models/manager.model')

module.exports.helloWorld = (req, res) => {
    res.json({ message: 'Hello World', request: req.body, time: new Date() });
}

module.exports.createProduct = (req, res) => {
    const { title, price, description } = req.body;
    Product.create({
        title,
        price,
        description
    })
        .then(product => res.json(product))
        .catch(err => res.json(err));
}

module.exports.findAllProducts = (req, res) => {
    Product.find({})
        .then(products => res.json(products))
        .catch(err => res.json(err));
}

module.exports.findOneProduct = (req, res) => {
    Product.findOne({ _id: req.params.id })
        .then(product => res.json(product))
        .catch(err => res.json(err));
}

module.exports.updateProduct = (req, res) => {
    Product.findOneAndUpdate({ _id: req.params.id }, req.body, { returnDocument: 'after', runValidators: true })
        .then(updatedProduct => res.json(updatedProduct))
        .catch(err => res.json(err));
}

module.exports.deleteProduct = (req, res) => {
    Product.deleteOne({ _id: req.params.id })
        .then(deleteConfirmation => res.json(deleteConfirmation))
        .catch(err => res.json(err));
}