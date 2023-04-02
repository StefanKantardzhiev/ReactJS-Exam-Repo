// import { Link } from "react-router-dom";

export const OfferItem = ({
    imageUrl,
    title,
    city,
    price
}) => {
    return (
        <div className="offer" >
            <div className="image-wrap">
                <img src={imageUrl} />
            </div>
            <h1>{title}</h1>
            <div className="rating">
                <span>☆</span><span>☆</span><span>☆</span><span>☆</span><span>☆</span>
            </div>
            <h2>{price} EUR</h2>
            <h3>{city}</h3>
            <div className="data-buttons">
                <a href='/offers/${_id}' className="data-buttons">Details</a>
            </div>
        </div>
    )
}