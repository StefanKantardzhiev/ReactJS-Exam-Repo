const Offer = require("../models/Offer")
const User = require("../models/User")

require('dotenv').config()

async function addOffer(Offer, id) {
    try {
        Offer.owner = id;
        return await Offer.create({ ...Offer })
    } catch (error) {
        throw new Error(error)
    }
}
async function getAll() {
    return await Offer.find({}).sort({ created_at: -1 });
}

async function getById(id) {
    return await Offer.findById(id);
}

async function editOffer(id, Offer) {
    const existing = await Offer.findById(id);

    existing.title = Offer.title;
    existing.description = Offer.description;
    existing.price = Offer.price;
    existing.img = Offer.img
    return existing.save();
}

async function deleteOffer(id) {
    await Offer.findByIdAndDelete(id)
}

async function getRecent() {
    const Items = await Offer.find({}).sort({ created_at: -1 }).limit(3);
    return Items
}

async function getByOwner(id) {
    return await Offer.find({ _ownerId: id })
}


module.exports = {
    addOffer,
    getAll,
    getById,
    editOffer,
    deleteOffer,
    getRecent,
    getByOwner
}
