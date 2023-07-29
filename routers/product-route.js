const express = require('express');
const { Product } = require('../models');
const router = express.Router();

router.get('/', async (req, res) => {
    const fechedProduct = await Product.find();
    res.status(200).json(fechedProduct);
});

router.post('/', (req, res) => {
    const { name, image, countInStock } = req.body;
    const newProduct = new Product({
        name,
        image,
        countInStock,
    });
    newProduct
        .save()
        .then((createdProduct) => {
            res.status(201).json(createdProduct);
        })
        .catch((err) => {
            res.status(500).json({
                error: err,
                success: false,
            });
        });
});

module.exports = router;
