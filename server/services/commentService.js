const Comment = require("../models/Comment")
const User = require("../models/User")

require('dotenv').config()

const addComment = async (comment, id) => {
    try {
        comment.owner = id;
        return await Comment.create(comment)
    } catch (error) {
        throw new Error(error)
    }
}
const getAll = async () => {
    return await Comment.find({}).sort({ created_at: -1 });
}

const getCommentById = async (id) => {
    return await Comment.findById(id);
}

// async function updateComment(id, Comment) {
//     const existing = await Comment.findById(id);

//     existing.title = Comment.title;
//     existing.description = Comment.description;
//     existing.price = Comment.price;
//     existing.city = Comment.city
//     existing.imageUrl = Comment.imageUrl


//     return existing.save();
// }

const deleteComment = async (id) => {

    await Comment.findByIdAndDelete(id)
}

// const getRecent = async () => {
//     const Comments = await Comment.find({}).sort({ created_at: -1 }).limit(3);
//     return Comments
// }

// const getCommentsByOwner = async () => {
//     const Comments = await Comment.find({}).sort({ _ownerId: -1 });
//     return Comments
// }

const updateComment = async (_id, commentId) => {
    try {
        const user = await User.findById(_id);
        let commentArray = user.comments
        commentArray.push(commentId)
        await User.findByIdAndUpdate(_id, { comments: commentArray })
    } catch (error) {
        throw new Error(error)
    }

}
module.exports = {
    addComment,
    getAll,
    getCommentById,
    deleteComment,
    updateComment
}
