const Comment = require('../models/Comment')

const { addComment, getAll, getCommentById } = require('../services/commentService');
const { updateComment } = require('../services/commentService')



const commentController = require('express').Router();


commentController.post('/create', async (req, res) => {
    const data = req.body;
    try {
        const userId = req?.user?._id;
        // console.log(data);

        const comment = await addComment(data, userId)
        await updateComment(userId, comment._id)
        res.status(201).json(offer)
    } catch (error) {
        console.log(error)
        res.status(400).json({ error: error.message })
    }
})

//get All Offers
commentController.get('/', async (req, res) => {
    const comments = await getAll()
    res.status(200).json(comments)
});

module.exports = commentController