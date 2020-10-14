const express=require('express');
const app = express();

const bodyParser=require('body-parser');
const userController = require('./controllers/users');
const errorController = require('./controllers/error');
app.use(express.static('public'));
app.use(bodyParser.urlencoded({extended: false}));
app.set('view engine', 'ejs');

app.set('views','views');
//const users=[];


app.get('/',userController.getAddUser);
/*
app.get('/', (req, res, next) => {
    res.render('index', { titleView: 'Add User' });
});
*/

app.get('/users',userController.getUsers);
/*
app.get('/users', (req, res, next) => {

    res.render('users', {
        titleView:'Users', users:users
    });
});

 */


app.post('/add-user',userController.postAddUser);
/*
app.post('/add-user', (req, res, next) => {
    console.log(req.body.uname);
    const { error } = validateUser(req.body);

    if (error) {
        res.render('error', {
            titleView:'Error Page', errormsg:error.details[0].message
        });
        return;
    }

    //res.status(400).send(error.details[0].message);

    users.push({uname:req.body.uname});
    res.redirect('/users');

});
*/

app.use(errorController.get404);

app.listen(3000,(() => {

    console.log('listening on http://localhost:3000');

}))

