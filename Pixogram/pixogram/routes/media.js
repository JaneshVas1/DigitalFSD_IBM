var express = require('express');
var router = express.Router();
var passport = require('passport');
var uploader = require("../utility/uploader");

var fs = require('fs');
const {Media} = require('../models/media');

const {Customer} = require('../models/users');


router.get('/:userId', async function(req, res, next) {
//since there is no session added customer as well here
    let customer = await Customer.findById({_id:req.params.userId});
   // console.log('Display Customer with ID'+ customer);


    const medias = await Media.find({userId: req.params.userId});
    //console.log('Media'+medias);

    if (medias.length==0) {
        console.log('No Media found');
        res.render('media', { data:{ titleView: 'Media Page',customer: customer} });
        res.end();

    }
    else {
      //  console.log('Inside get Medias');
        res.render('media', { data:{ titleView: 'Media Page',customer: customer,media: medias} });
        //res.end();
        //res.send(customer);

    }});

router.post('/add-media',uploader.single('media'),async function(req, res, next) {
    //console.log(req.body);
    //console.log("inside add media");

      let media = {
            userId: req.body.userId,
            mediatitle: req.body.mediatitle,
            description: req.body.description,
            tags: req.body.tags,
            effects: req.body.effects,
            media: {
              imgdata: new Buffer.from(fs.readFileSync(req.file.path), 'base64'),
              contentType: req.file.mimetype
          }

      };

      // console.log("Media initialized");
        Media.create(media, (err, item) => {
            if (err) {

                console.log(err);
                res.end();
            }
            else {
                // item.save();
                res.redirect('/media/'+req.body.userId);
            }});

});

router.delete('/:id', async function(req, res, next) {

    //console.log(req.params.id);
    const result = await Media.deleteMany({_id:req.params.id});
    //console.log(result);
    res.send({success: true,message:" Deleted"});
});


// Uploading the images
router.post('/many', uploader.array('image', 12), (req, res, next) => {
    let userId = req.body.userId;
    const files = req.files;
    const objs = [];

    req.files.forEach(file=>{
        objs.push({


                userId: userId,
                mediatitle: "test",
                description: "descr",
                tags: ["eee"],
                effects: "test",
                media: {
                    imgdata: new Buffer.from(fs.readFileSync(file.path), 'base64'),
                    contentType: file.mimetype
                }
            })

    });

    Media.insertMany(objs, (err, item) => {
        if (err) {
            console.log(err);
        }
        else {
            // item.save();
            res.redirect('/media/'+userId);
        }
    });
});



router.post('/add-comments',async function(req, res, next) {
    console.log(req.body);
    console.log("inside add comments");
/*
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
            res.redirect('/media/'+req.body.username);
        }});
*/
    res.redirect('/media/'+req.body.username);
});

router.get('/comments',async function(req, res, next) {
    console.log(req.body);
    console.log("inside get comments");
    /*
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
                res.redirect('/media/'+req.body.username);
            }});
    */
});



module.exports = router;

