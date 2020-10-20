var express = require('express');
var router = express.Router();
var passport = require('passport');

const {Followers} = require('../models/followers');
const {Customer} = require('../models/users');
router.get('/:username', async function(req, res, next) {

    const followers = await Followers.find({username: req.params.username});
    console.log('Customer'+followers);

    if (followers.length==0) {
        console.log('No followers found');

        res.end();

    }
    else {
        console.log('Inside get followers');

        res.end();
        //res.send(customer);

}});

router.post('/add-follower',passport.authenticate('jwt', { session: false }),async function(req, res, next) {
console.log(req.body);
console.log("inside add follower");

    const customer = await Customer.find({username: req.body.followerusername });
    console.log('Customer'+customer);
    if (!!customer) {
        let follower = {
            username: req.body.username,
            followUserName: req.body.followerusername,
        };
        console.log("Follower initialized");
        Followers.create(follower, (err, item) => {
            if (err) {

                console.log(err);
                res.end();
            }
            else {
                // item.save();
                res.redirect('/');
            }});

    }




});

router.delete('/:username', async function(req, res, next) {

    console.log(req.params.username);
    const result = await Followers.deleteMany({username:req.params.username});
    console.log(result);
    res.send('respond with a delete resource');
});


module.exports = router;

