import { OfferItem } from "../Offer/OfferItem/OfferItem"

export const Latest = ({
    offers
}) => {
    return (
        <section id="catalog-page">
            <h1>Latest Offers</h1>
            {offers.map(x =>
                <OfferItem key={x._id} {...x} />
            )}

            {offers.length === 0 && (
                <h3 className="no-articles">No articles yet</h3>
            )}
        </section>
    )
}
