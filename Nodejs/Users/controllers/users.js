//const users = [];
const User = require('../models/users');
const Joi=require('joi');
const errorController = require('./error');
exports.getAddUser=(req, res)=>
{
    res.render('index', {titleView: 'Add User', path: '/add-user'});
}


exports.postAddUser = (req, res) => {
    const { error } = validateUser(req.body);
    if (error) {

        res.render('error', {
            titleView:'Error Page', errormsg:error.details[0].message
        });
        return;
    }
    const user = new User(req.body.uname);
    user.save();
    //users.push({ uname: req.body.uname });
    res.redirect('/users');
};

exports.getUsers = (req, res) => {
    User.fetchAll(users => {
        res.render('users', {
            users: users,
            titleView: 'Users',
            path: '/'
        });
    });

    /*
    //Arrays based fetch
    const users = User.fetchAll();
    res.render('users', {
        titleView:'Users', users:users
    });

     */
};

exports.deleteUsers = (req, res) => {
    User.delete();
    res.redirect('/users');
    };


function validateUser(user) {
    const schema = {
        uname: Joi.string().min(5).required(),
    };
    return Joi.validate(user, schema);
}