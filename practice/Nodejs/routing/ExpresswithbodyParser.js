const express = require('express');
const app = express();
const bodyParser = require('body-parser')
app.use(bodyParser.urlencoded({extended: false}));

app.get('/add-product', ((req, res, next) => {
    res.send('<form action="/product" method="POST">' +
        '<label>Provide Product Type:</label></label><input type="text" name="title"><br/>' +
        '<input type="submit" value="addProduct"></form>')

}));
app.post('/product', (req, res, next) => {
console.log(req.body);
res.redirect('/');

    }
);
app.use('/', (req, res, next)=>{
    res.send('<h2>Welcome to my first app....</h2>');
});
const port=process.env.PORT || 3000;
app.listen(3000,()=>{
    console.log(`server started at http://localhost:${port}`);
})
