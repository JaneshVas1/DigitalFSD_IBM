var express = require('express');
var router = express.Router();
var passport = require('passport');

const {Followers} = require('../models/followers');
const {Customer} = require('../models/users');
router.get('/:userId', async function(req, res, next) {

    const followers = await Followers.find({userId: req.params.userId});
    console.log('Customer'+followers);

    if (followers.length==0) {
        console.log('No followers found');
        res.send({success: false,  message: "No followers found"});
        //res.end();



    }
    else {
        console.log('Inside get followers');
        res.send({success: true, data: { followers }});
        //res.end();
        //res.send(customer);

}});

//router.post('/add-follower',passport.authenticate('jwt', { session: false }),async function(req, res, next) {
router.post('/add-follower',async function(req, res, next) {
console.log(req.body);
console.log("inside add follower");

    const customer = await Customer.find({userId: req.body.followeruserId });
    console.log('Customer'+customer);
    if (!!customer) {
        let follower = {
            userId: req.body.userId,
            followUserId: req.body.followeruserId,
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

router.delete('/:userId', async function(req, res, next) {

    console.log(req.params.userId);
    const result = await Followers.deleteMany({userId:req.params.userId});
    console.log(result);

    res.send({success: true,  message: "record deleted"});
    //res.send('respond with a delete resource');
});


module.exports = router;

