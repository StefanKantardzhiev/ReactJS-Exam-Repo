// import { Link } from "react-router-dom";

export const HomeItem = ({
    _id,
    title,
    imageUrl,
    city,
}) => {
    return (
        <div className="game" >
            <div className="image-wrap">
                <img src={imageUrl} />
            </div>
            <h3>{title}</h3>
            <div className="rating">
                <span>☆</span><span>☆</span><span>☆</span><span>☆</span><span>☆</span>
            </div>
            <div className="data-buttons">
                <a href='/catalog/${_id}' className="data-buttons">Details</a>
            </div>
        </div>
    )
}