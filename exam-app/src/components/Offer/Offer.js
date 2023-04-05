import { OfferItem } from "./OfferItem/OfferItem"

export const Offer = ({
    
    offers,
}) => {

    return (
        <>
            <h1 id='all-offers'>All Offers</h1>
            <section id="catalog-page">

                {offers.map(x =>
                    <OfferItem key={x._id} {...x} />
                )}

                {offers.length === 0 && (
                    <h3 className="no-articles">No articles yet</h3>
                )}
            </section>
        </>
    );
};