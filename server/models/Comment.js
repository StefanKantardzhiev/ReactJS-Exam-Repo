const { Schema, model, Types } = require('mongoose');


const commentSchema = new Schema({
    comment: { type: String, required: true, minlength: [3, 'Comment must be at least 3 characters long!'] }

}, { timestamps: { createdAt: 'created_at' } });


const Comment = model('Comment', commentSchema);

module.exports = Comment;