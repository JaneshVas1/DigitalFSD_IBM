var mongoose = require('mongoose');

var CommentSchema = new mongoose.Schema({
    body      : String,
    likes     : Number,
    dislikes  : Number
});

// validation-> https://mongoosejs.com/docs/validation.html
var ImageSchema = new mongoose.Schema({
    caption: String,
    description: String,
    img:
        {
            data: Buffer,
            contentType: String
        },
    comments  : [CommentSchema]
});
/*
// embedded
image.comments.push({ body: 'i like it', likes: 4, dislikes: 2 });
image.save...
*/

//image is a model which has a schema ImageSchema

module.exports = new mongoose.model('image', ImageSchema);
