const { create, getById, update, createOffer, deleteById } = require('../services/offerService')
const { parseError } = require('../util/parser');

const offerController = require('express').Router()

offerController.get('/:id/details', async (req, res) => {
    const id = req.params.id
    const offer = await getById(id)
    if (offer.owner == req.user._id) {
        offer.isOwner = true
    } else if (offer.bookings.map(b => b.toString()).includes(req.user._id.toString())) {
        offer.isBooked = true``
    }

    res.render('details', {
        title: 'Details',
        offer
    })

});

offerController.get('/:id/delete', async (req, res) => {
    const offer = await getById(req.params.id)
    if (offer.owner != req.user._id) {
        return res.redirect('/auth/login')
    }
    await deleteById(req.params.id)
    res.redirect('/')
});




// offerController.get('/:id/offer', async (req, res) => {
//     const offer = await getById(req.params.id)
//     try {
//         // if (offer.owner == req.user._id) {
//         //     offer.isOwner = true;
//         //     throw new Error('You Cannot Book your own hotel!')
//         // }
//         // if (offer.bookings.map(b => b.toString()).includes(req.user_id.toString())) {
//         //     offer.isBooked = true;
//         //     throw new Error('Cannot make an offer twice!')
//         // }
//         await makeOffer(req.params.id, req.user._id)
//         res.redirect(`/offer/${req.params.id}/details/`)

//     }
//     catch (err) {
//         res.render('details', {
//             title: 'Offer Details',
//             offer,
//             errors: parseError(err)
//         })
//     }



// })

offerController.post('/create', async (req, res) => {
    const offer = {
        title: req.body.name,
        city: req.body.city,
        description: req.body.description,
        imageUrl: req.body.imageUrl,
        owner: req.user._id
    }
    try {
        await create(offer)
        res.redirect('/')
    } catch (error) {
        res.render('create', {
            title: 'Create offer',
            body: offer,
            errors: parseError(error)  // visualise errors
        })

    }
})



// offerController.get('/:id/edit', async (req, res) => {
//     const offer = await getById(req.params.id)
//     res.render('edit', {
//         title: 'Edit Offer',
//         offer
//     })
// })

offerController.post('/:id/edit', async (req, res) => {
    const offer = await getById(req.params.id)

    if (offer.owner != req.user._id) {
        return res.redirect('/auth/login')
    }

    const edited = {
        title: req.body.name,
        city: req.body.city,
        description: req.body.description,
        imageUrl: req.body.imageUrl,
    }

    try {
        if (Object.values(edited).some(v => !v)) {
            throw new Error('All fields required!')
        }

        await update(req.params.id, edited)
        res.redirect(`/offers/${req.params.id}/details`)
    } catch (error) {
        res.render('edit', {
            title: 'Edit Offer',
            offer: Object.assign(edited, { _id: req.params.id }),
            errors: parseError(error)  // visualise errors
        })

    }
})



module.exports = offerController