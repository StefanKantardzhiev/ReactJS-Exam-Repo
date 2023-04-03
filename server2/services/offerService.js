const Offer = require("../models/Offer")
const User = require("../models/User")

require('dotenv').config()

const addOffer = async (offer, id) => {
    try {
        offer.owner = id;
        return await Offer.create({ ...offer })
    } catch (error) {
        throw new Error(error)
    }
}
const getAll = async () => {
    return await Offer.find({}).sort({ created_at: -1 });
}

const getOfferById = async (id) => {
    return await Offer.findById(id);
}

async function updateOffer(id, offer) {
    const existing = await Offer.findById(id);

    existing.title = offer.title;
    existing.description = offer.description;
    existing.price = offer.price;
    existing.city = offer.city
    existing.imageUrl = offer.imageUrl
    
    
    return existing.save();
}

const deleteOffer = async (id) => {
    await Offer.findByIdAndDelete(id)
}
const getMostExpensiveOffers = async () => {
    const offers = await Offer.find({}).sort({ price: -1 }).limit(3);
    return offers
}

const getRecent = async () => {
    const offers = await Offer.find({}).sort({ created_at: -1 }).limit(3);
    return offers
}

const getOffersByOwner = async (_id) => {
    return await Offer.find({ _ownerId: _id })
}


module.exports = {
    addOffer,
    getAll,
    getOfferById,
    updateOffer,
    deleteOffer,
    getMostExpensiveOffers,
    getRecent,
    getOffersByOwner
}
