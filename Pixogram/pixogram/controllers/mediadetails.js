const {Newsfeed} = require('../models/newsfeed');
const {Comments} = require('../models/comments');
const {Media} = require('../models/media');

exports.getComments = async (medias,userId,cb) => {
	mediaComments= [];
	for (i=0;i<medias.length;i++) {
		console.log(medias[i]._id);
		let newsfeed = await Newsfeed.find({mediaId: medias[i]._id, userId: userId});
		console.log(newsfeed.length);
		for (j=0;j<newsfeed.length;j++) {
			let comments = await Comments.find({newsfeedId: newsfeed[i]._id});
			console.log("Inside comments push");
			mediaComments.push(comments);
	
		}
	}
	
	
	cb(false,mediaComments);

    };
