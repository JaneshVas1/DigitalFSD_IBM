const express=require('express');
const path=require('path');
const router=express.Router();
const rootDir=require('.././util/path');

const products=[];
router.get('/add-product',(req, res) => {

   /* res.send('<form action="/admin/product" method="post">' +

        '<input type="text" name="title"><br/>' +

        '<input type="submit" value="add product"></form>');*/

       // res.sendFile(path.join(rootDir, 'views','add-product.html'));
    res.render('add-product',{titleView:'Add product'})

});

router.post('/add-product',(req, res) => {

    console.log(req.body);
    products.push({title:req.body.title});
    res.redirect('/');

});

module.exports = router;
//module.exports.routes = router;

module.exports.products = products;