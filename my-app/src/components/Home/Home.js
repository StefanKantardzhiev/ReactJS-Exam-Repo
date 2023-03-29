import { HomeItem } from "../Home/HomeItem";

export const Home = ({
    offers
}) => {
    return (
        <section id="welcome-world">

            <div className="welcome-message">
                <h2>Welcome to GermanMechanics.de</h2>
                <h3>The place where you can offer your skills!</h3>
            </div>
            <img src="./images/pngegg.png" alt="hero" />
            <div id="home-page">
                <h1>Latest Offers</h1>

                {offers.map(x =>
                    <HomeItem key={x._id} {...x} />
                )}
                {offers.length === 0 && (
                    <h3 className="no-articles">No offers yet</h3>
                )}
            </div>
        </section>
    );
}