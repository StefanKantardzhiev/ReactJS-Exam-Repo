import { Link } from 'react-router-dom';


import { useContext } from 'react';
import { AuthContext } from '../../contexts/AuthContext';

export const Header = () => {
    const { user, onLogoutHandler } = useContext(AuthContext);

    return (
        <header>
            <h1><Link className="home" to="/">GermanMechanics</Link></h1>
            <nav>
                <Link to="/offers/latest">Latest Offers</Link>
                {(user != null)
                    ?
                    <div id="user">
                        <span>Hello {user.email} !</span>
                        <Link to="/offers">All offers</Link>
                        <Link to="/create-offer">Create Offer</Link>
                        <Link to="/" onClick={onLogoutHandler}>Abmelden</Link>
                    </div>

                    :

                    <div id="guest">
                        <Link to="/auth/login">Login</Link>
                        <Link to="/auth/register">Register</Link>
                    </div>

                }</nav>
        </header>
    )
}