import { Link, useParams } from "react-router-dom";
import { commentServiceFactory } from '../../../services/commentService'

import { useState, useEffect } from "react";

import { AddComment } from './AddComment'



export const OfferItem = ({
    _id,
    title,
    imageUrl,
    city,
    price,
    description
}) => {

    const commentService = commentServiceFactory()

  

    return (
        <>
            <div className="allOffers">
                <img src={imageUrl} />
                <h2>{title}</h2>
                <h1>{city}</h1>

                <blockquote>"{description}"</blockquote>
                <h1>Price: {price} EUR</h1>
                {/* <Link to={`/offers/${_id}/edit`} className="button">Edit</Link>*/}
                <Link to={`/offers/${_id}`} className="button">Details</Link>
            </div>
        </>
    );
}