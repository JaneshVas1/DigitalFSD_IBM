const express=require('express');

const router=express.Router();

router.get('/add-product',(req, res) => {

    res.send('<form action="/admin/product" method="post">' +

        '<input type="text" name="title"><br/>' +

        '<input type="submit" value="add product"></form>');

});

router.post('/product',(req, res) => {

    console.log(req.body);

    res.redirect('/admin/add-product');

});

module.exports = router;