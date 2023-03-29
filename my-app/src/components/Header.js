// import { useContext } from 'react';
// import { Link } from 'react-router-dom';

// import { AuthContext } from '../../contexts/AuthContext';

export const Header = () => {
    // const { isAuthenticated, userEmail } = useContext(AuthContext);

    return (
        <header>
            <h2><a href="/" className="home">GermanMechanics.de</a></h2>
            <nav>
                <a href="/" to="/catalog">All Services</a>
                {/* {isAuthenticated && ( */}
                    <div id="user">
                        <span>email</span>
                        <a href="/" to="/create-game">Create an order</a>
                        <a href="/" to="/create-game">All orders</a>
                        <a href="/" to="/logout">Logout</a>
                    </div>
                {/* )} */}

                {/* {!isAuthenticated && ( */}
                    <div id="guest">
                        <a href="/" to="/login">Login</a>
                        <a href="/" to="/register">Register</a>
                    </div>
                {/* )} */}
            </nav>
        </header>
    );
};