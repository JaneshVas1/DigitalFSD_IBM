const express=require('express');
const path=require('path');

const adminRoutes=require('../route/admin');
const router=express.Router();

const rootDir=require('.././util/path');
router.get('/',(req, res) => {

    //res.send('<h1>Hello from Express!</h1>');
    //res.sendFile(path.join(__dirname, '../','views','shop.html'));
    console.log('shop.js',adminRoutes.products);
    res.sendFile(path.join(rootDir, 'views','shop.html'));

});

module.exports=router;