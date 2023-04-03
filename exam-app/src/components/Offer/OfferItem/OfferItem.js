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
            <div className="allOffers-card">
                <img src={imageUrl} />
                <div id="card-info">
                    <h6>{city}</h6>
                    <h2>{title}</h2>
                    <blockquote>"{description}"</blockquote>
                </div>
                <h1>Price: {price} EUR</h1>
                <Link to={`/offer/${_id}/edit`} className="button">Edit</Link>
                <Link to={`/offer/${_id}`} className="button">Details</Link>
            </div>

        </div>
    );
}