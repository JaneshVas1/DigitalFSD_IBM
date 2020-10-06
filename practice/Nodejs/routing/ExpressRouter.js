const bodyParser=require('body-parser');

const express=require('express');

const app = express();

app.use(bodyParser.urlencoded({extended: false}));

const adminRoutes=require('./route/admin');

const shopRoutes=require('./route/shop');

app.use(adminRoutes);

app.use(shopRoutes);

app.listen(3000,(() => {

    console.log('listening on http://localhost:3000');

}))