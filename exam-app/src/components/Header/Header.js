import { Link } from 'react-router-dom';
import { useContext } from 'react';
import { AuthContext } from '../../contexts/AuthContext';

export const Header = () => {
    const { user, onLogoutHandler } = useContext(AuthContext);
    console.log(user)
    return (
        <header>
           <Link to='/'><div className="image-header" ></div></Link>
            <nav>

                {(user != null)
                    ?
                    <div id="user">
                        <span>Hello {user.email} !</span>
                        <Link to="/offers">All offers</Link>
                        <Link to="/offers/create">Create Offer</Link>
                        <Link to="/" onClick={onLogoutHandler}>Abmelden</Link>
                    </div>

                    :

                    <div id="guest">
                        <Link to="/offers/latest">Latest Offers</Link>
                        <Link to="/auth/login">Login</Link>
                        <Link to="/register">Register</Link>
                    </div>

                }</nav>
        </header>
    )
}