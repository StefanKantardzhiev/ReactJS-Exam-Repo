import { OfferItem } from "../Offer/OfferItem/OfferItem"

export const Latest = ({
    offers
}) => {
    return (

        <div id="home-page">
            <h1>Latest Offers</h1>

            {offers.map(x =>
                <OfferItem key={x._id} {...x} />
            )}
            {offers.length === 0 && (
                <h3 className="no-articles">No offers yet</h3>
            )}
        </div>
    )
}