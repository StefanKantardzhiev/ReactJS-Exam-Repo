import { useEffect, useState, useReducer, useContext } from 'react';
import { useParams, useNavigate, Link } from 'react-router-dom';
// import * as commentService from '../../services/commentService';
// import { useService } from '../../hooks
import { AuthContext } from '../../contexts/AuthContext'
import { AddComment } from '../Offer/OfferItem/AddComment'
// import { gameReducer } from '../../reducers/gameReducer';
import { offerServiceFactory } from '../../services/offerService';
import { commentServiceFactory } from '../../services/commentService';




export const OfferDetails = ({ offers }) => {

    const { offerId } = useParams()

    const context = useContext(AuthContext)
    const user = context.user

    const [offer, setOffer] = useState([])
    const [items, setItems] = useState(offers)
    const [comments, setComments] = useState("")
    const navigate = useNavigate()
    const offerService = offerServiceFactory()

    useEffect(() => {
        offerService.getOne(offerId)
            .then(data => {
                setOffer(data)
            })
    }, [offers]);



    const changeHandler = (e) => {
        setComments(e.target.value);
        console.log(comments)
    };
    
    const isOwner = offer._ownerId === user._id;
    const onDeleteClick = async () => {
        await offerService.delete(offer._id);
        navigate('/offers');
    }

    


    const commentService = commentServiceFactory()

    const onCommentSubmit = async (commentId, values) => {
        await commentService.create(commentId, values.comment);
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

                <AddComment onCommentSubmit={onCommentSubmit} changeHandler={changeHandler} />
                {/* {isAuthenticated && <AddComment onCommentSubmit={onCommentSubmit} />} */}
            </div>
        </section>
    );
};