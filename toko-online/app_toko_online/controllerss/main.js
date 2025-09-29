var product = require('../../data/products.json');

const index = (req, res) =>{
    res.render('index',{
        title: 'toko Online Sederhana',
        products: products
    });
};

module.exports = { index };