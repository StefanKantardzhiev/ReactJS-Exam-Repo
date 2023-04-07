const User = require('../models/User');

const { addOffer, getAll, getRecent, getOfferById, updateOffer, deleteOffer, getOffersByOwner } = require('../services/offerService');
const { updateUserOffers } = require('../services/userService');

const offerController = require('express').Router();


//create Offer
offerController.post('/create', async (req, res) => {
    const data = req.body;
    try {
        const userId = req?.user?._id;
        // console.log(data);

        const offer = await addOffer(data, userId)
        await updateUserOffers(userId, offer._id)
        res.status(201).json(offer)
    } catch (error) {
        console.log(error)
        res.status(400).json({ error: error.message })
    }
})

//get All Offers
offerController.get('/', async (req, res) => {
    const offers = await getAll()
    res.status(200).json(offers)
});


//get most recent offers
offerController.get('/recent', async (req, res) => {
    const offers = await getRecent()
    res.status(200).json(offers);
})

//get offer by ID
offerController.get('/:id', async (req, res) => {
    try {
        let id = req.params.id;
        const offer = await getOfferById(id);
        if (offer) {
            res.status(200).json(offer)
        } else {
            throw new Error('Invalid offer ID!')
        }
    } catch (error) {
        console.log(error)
        res.status(400).json({ error: error.message })
    }
});

//update offer by ID
offerController.put('/:id', async (req, res) => {
    try {
        const offer = await getOfferById(req.params.id);

        if (req.user._id != offer._ownerId) {
            return res.status(403).json({ message: 'You cannot edit this offer' })
        }
        const result = await updateOffer(req.params.id, req.body);
        res.status(200).json(result)
    } catch (err) {
        console.log(err);
        res.status(400).json({ error: err.message })
    }
});


offerController.get('/profile', async (req, res) => {
    try {
        const result = await getOffersByOwner()
        console.log(result)
        res.status(200).json(result)
    } catch (err) {
        console.log(err);
        res.status(400).json({ error: err.message })
    }
});

// delete offer
offerController.delete('/:id', async (req, res) => {
    try {
        const offer = await getOfferById(req.params.id);
        if (req.user._id != offer._ownerId) {
            return res.status(403).json({ err: err.message })
        }
        await deleteOffer(req.params.id);
        res.status(204).end()
    } catch (err) {
        res.status(400).json({ err: err.message })
    }
});






module.exports = offerController;
