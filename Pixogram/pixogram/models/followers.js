const mongoose = require('mongoose');
const Followers = mongoose.model('Followers', new mongoose.Schema({
    username: {
        type: String,
        required: true,
    },

   followUserName: {
       type: String,
       required: true,
   }

}));

exports.Followers = Followers;
