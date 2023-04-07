import { useEffect, useState, useReducer, useContext } from 'react';
import { useParams, useNavigate, Link } from 'react-router-dom';
// import * as commentService from '../../services/commentService';
// import { useService } from '../../hooks
import { AuthContext } from '../../contexts/AuthContext'
// import { AddComment } from './AddComment/AddComment';
// import { gameReducer } from '../../reducers/gameReducer';
import { offerServiceFactory } from '../../services/offerService';





export const OfferDetails = ({ offers }) => {

    const { offerId } = useParams()

    const context = useContext(AuthContext)
    const user = context.user
    const [offer, setOffer] = useState([])
    const [items, setItems] = useState(offers)

    const navigate = useNavigate()
    const offerService = offerServiceFactory()

    useEffect(() => {
        offerService.getOne(offerId)
            .then(data => {
                setOffer(data)
            })
    }, [offers]);




    const isOwner = offer._ownerId === user._id;
    const onDeleteClick = async () => {
        await offerService.delete(offer._id);
        navigate('/offers');
    }





    return (
        <section id="offer-details">
            <h1>Offer Details</h1>
            <div className="info-section">
                <div className="offer-header">
                    <img className="offer-img" src={offer.imageUrl} />
                    <h1>{offer.title}</h1>
                    <p className="type">{offer.city}</p>
                    <p className="text">{offer.description}</p>
                    <p className="text">{offer.price} EUR</p>
                    {isOwner && (
                        <div className="buttons">
                            <Link to={`/offers/${offer._id}/edit`} className="button">Edit</Link>
                            <button className="button" onClick={onDeleteClick}>Delete</button>
                        </div>
                    )}
                    
                </div>


                {/* 
                <div className="details-comments">
                    <h2>Comments:</h2>
                    <ul>
                        {offer.comments && game.comments.map(x => (
                            <li key={x._id} className="comment">
                                <p>{x.author.email}: {x.comment}</p>
                            </li>
                        ))}
                    </ul>

                    {!game.comments?.length && (
                        <p className="no-comment">No comments.</p>
                    )}
                </div> */}




                {/* {isAuthenticated && <AddComment onCommentSubmit={onCommentSubmit} />} */}
            </div>
        </section>
    );
};