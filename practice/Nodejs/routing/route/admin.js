const express=require('express');
const path=require('path');
const router=express.Router();
const rootDir=require('.././util/path');
router.get('/add-product',(req, res) => {

   /* res.send('<form action="/admin/product" method="post">' +

        '<input type="text" name="title"><br/>' +

        '<input type="submit" value="add product"></form>');*/
        res.sendFile(path.join(rootDir, 'views','add-product.html'));

});

router.post('/add-product',(req, res) => {

    console.log(req.body);

    res.redirect('/');

});

module.exports = router;