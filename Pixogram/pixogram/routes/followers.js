var express = require('express');
var router = express.Router();

const {Followers} = require('../models/followers');
router.get('/', async function(req, res, next) {

    const followers = await Followers.find({username: 'pppppppp'});
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

router.post('/add-follower', function(req, res, next) {


    res.send('respond with a post resource');
});

router.delete('/', function(req, res, next) {
    res.send('respond with a delete resource');
});


module.exports = router;

