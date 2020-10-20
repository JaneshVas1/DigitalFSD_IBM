var express = require('express');
var router = express.Router();
var passport = require('passport');
var uploader = require("../utility/uploader");

var fs = require('fs');
const {Media} = require('../models/media');

const {Customer} = require('../models/users');


router.get('/:username', async function(req, res, next) {
//since there is no session added customer as well here
    let customer = await Customer.findById({_id:'5f8976531c9e70234003a28a'});
    console.log('Display Customer with ID'+ customer);


    const medias = await Media.find({username: req.params.username});
    console.log('Media'+medias);

    if (medias.length==0) {
        console.log('No Media found');
        res.render('media', { data:{ titleView: 'Media Page',customer: customer} });
        res.end();

    }
    else {
        console.log('Inside get Medias');
        res.render('media', { data:{ titleView: 'Media Page',customer: customer,media: medias} });
        //res.end();
        //res.send(customer);

    }});

router.post('/add-media',uploader.single('media'),async function(req, res, next) {
    console.log(req.body);
    console.log("inside add media");

      let media = {
            username: req.body.username,
            mediatitle: req.body.mediatitle,
            description: req.body.description,
            tags: req.body.tags,
            effects: req.body.effects,
            media: {
              imgdata: new Buffer.from(fs.readFileSync(req.file.path), 'base64'),
              contentType: req.file.mimetype
          }

      };

       console.log("Media initialized");
        Media.create(media, (err, item) => {
            if (err) {

                console.log(err);
                res.end();
            }
            else {
                // item.save();
                res.redirect('/media'+req.body.username);
            }});

});

router.delete('/:username', async function(req, res, next) {

    console.log(req.params.username);
    const result = await Media.deleteMany({username:req.params.username});
    console.log(result);
    res.send('respond with a delete resource');
});


module.exports = router;

