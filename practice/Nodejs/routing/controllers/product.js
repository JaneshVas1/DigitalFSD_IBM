//const products = [];
const Product = require('../models/products');
exports.getAddProduct=(req, res)=>
{
    res.render('add-product', {titleView: 'Add Product', path: '/admin/add-product'});
}


exports.postAddProduct = (req, res) => {
    const product = new Product(req.body.title,req.body.imgurl,req.body.price,req.body.description);
    product.save();
    //products.push({ title: req.body.title });
    res.redirect('/');
};

exports.getProducts = (req, res) => {
    //arrary based fetch
    /*
    const products = Product.fetchAll();
    res.render('shop', {products: products, titleView: 'Shop', path: '/'});
    */
    //File based fetch
    Product.fetchAll(products => {
        res.render('shop', {
            products: products,
            titleView: 'Shop',
            path: '/'
        });
    });

};