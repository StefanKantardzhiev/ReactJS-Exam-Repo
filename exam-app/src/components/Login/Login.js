import { Link, useNavigate } from 'react-router-dom';

import { useContext, useState } from 'react';
import { AuthContext } from '../../contexts/AuthContext';
import { authServiceFactory } from '../../services/authService';
import { useLocalStorage } from '../../hooks/useLocalStorage';

export const Login = () => {

    const [formData, setFormData] = useState({
        email: '',
        password: ''
    });

    const onChangeHandler = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
        
    };
    const { setUserData } = useContext(AuthContext);
    
    const navigate = useNavigate();
    const [auth, setAuth] = useLocalStorage('auth',{});
    const authService = authServiceFactory(auth.accessToken)



    
    const onSubmitHandler = async (e) => {
        e.preventDefault();
        try {
            const userData = await authService.login(formData)
            setUserData(userData);
            navigate('/');
        } catch (error) {
            console.log(error.message);
        }
    }

    return (
        <section id="login-page" className="auth">
            <form id="login" method="POST" onSubmit={onSubmitHandler}>
                <div className="container">
                    <div className="brand-logo"></div>
                    <h1>Login</h1>
                    <label htmlFor="email">Email:</label>
                    <input
                        type="email"
                        id="email"
                        name="email"
                        placeholder="Sokka@gmail.com"
                        onChange={onChangeHandler}

                    />

                    <label htmlFor="login-pass">Password:</label>
                    <input
                        type="password"
                        id="login-password"
                        name="password"
                        onChange={onChangeHandler}
                    />
                    <input type="submit" className="btn submit" value="Login" />
                    <p className="field">
                        <span>If you don't have profile click <Link to="/register">here</Link></span>
                    </p>
                </div>
            </form>
        </section>
    );
}


// export default withAuth(Login);