import { Link } from "react-router-dom";

export const OfferItem = ({
    _id,
    title,
    imageUrl,
    city,
    price,
    description
}) => {
    return (
        <div className="allOffers">
            <img src={imageUrl} />
            <h2>{title}</h2>
            <h1>{city}</h1>
            
            <blockquote>"{description}"</blockquote>
            <h1>Price: {price} EUR</h1>
            <Link to={`/offer/${_id}/edit`} className="button">Edit</Link>
            <Link to={`/offer/${_id}`} className="button">Details</Link>
        </div>
    );
}