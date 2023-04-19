const mongoose = require('mongoose');

const Schema = mongoose.Schema;


const postShema = new Schema({
    text: {
        type: String,
        require: true,
    },
    title: {
        type: String,
        require: true,
    },
    author: {
        type: String,
        require: true,
    },
}, { timestamps: true });


const Post = mongoose.model('Post', postShema); 

module.exports = Post;