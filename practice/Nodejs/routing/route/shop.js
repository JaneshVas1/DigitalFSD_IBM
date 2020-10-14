const express=require('express');
const path=require('path');

const adminRoutes=require('../route/admin');
const router=express.Router();

const rootDir=require('.././util/path');
router.get('/',(req, res) => {

    //res.send('<h1>Hello from Express!</h1>');
    //res.sendFile(path.join(__dirname, '../','views','shop.html'));
    console.log('shop.js',adminRoutes.products);
    //res.sendFile(path.join(rootDir, 'views','shop.html'));
    res.render('shop',{titleView:'Shop', products:adminRoutes.products})
});

router.get('/home',(req, res) => {

    //res.send('<h1>Hello from Express!</h1>');
    //res.sendFile(path.join(__dirname, '../','views','shop.html'));
    console.log('shop.js',adminRoutes.products);
    //res.sendFile(path.join(rootDir, 'views','shop.html'));
    res.render('home',{titleView:'Home', msg:"Welcome to our world"})
});

module.exports=router;