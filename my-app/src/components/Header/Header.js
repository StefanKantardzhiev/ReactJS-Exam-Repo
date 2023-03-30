// import { useContext } from 'react';
// import { Link } from 'react-router-dom';

// import { AuthContext } from '../../contexts/AuthContext';

export const Header = () => {
    // const { isAuthenticated, userEmail } = useContext(AuthContext);

    return (
        <header>
            <h1><a href='/' className="home" to="/">GermanMechanics.de</a></h1>
            <nav>
                <a href='/offers'>All Offers</a>
                {/* {isAuthenticated && ( */}
                <div id="user">
                    <span>email</span>
                    <a href="/create-offer">Create Offer</a>
                    <a href="/logout">Logout</a>
                </div>
                {/* )} */}

                {/* {!isAuthenticated && ( */}
                <div id="guest">
                    <a href="/login">Login</a>
                    <a href="/register">Register</a>
                </div>
                {/* )} */}
            </nav>
        </header>
    );
};