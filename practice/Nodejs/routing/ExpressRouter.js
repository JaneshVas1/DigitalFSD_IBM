const bodyParser=require('body-parser');

const express=require('express');
const path=require('path');
const app = express();
app.use(express.static('public'));

app.set('view engine', 'pug');

app.set('views','views');
app.use(bodyParser.urlencoded({extended: false}));

const adminRoutes=require('./route/admin');

const shopRoutes=require('./route/shop');
const rootDir=require('./util/path');
app.use('/admin',adminRoutes);

app.use(shopRoutes);

app.use('/', (req, res, next)=>{
	//path dirname
    //res.status(404).sendFile(path.join(__dirname, 'views', '404.html'));
    // working changed to render 404 pug
    //res.status(404).sendFile(path.join(rootDir, 'views', '404.html'));
    res.render('404',{titleView:'error page'})
});


app.listen(3000,(() => {

    console.log('listening on http://localhost:3000');

}))

