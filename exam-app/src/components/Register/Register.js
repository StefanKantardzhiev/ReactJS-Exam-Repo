import { useContext, useState } from 'react';
import { AuthContext } from '../../contexts/AuthContext';
import { authServiceFactory } from '../../services/authService'
import { Link, useNavigate } from 'react-router-dom';
import { useLocalStorage } from '../../hooks/useLocalStorage';




export const Register = () => {
    const [formData, setFormData] = useState({
        email: '',
        password: '',
        rePass:''
    });

    const onChangeHandler = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
        console.log(formData)

    };
    const { setUserData } = useContext(AuthContext);

    const navigate = useNavigate();
    const [auth, setAuth] = useLocalStorage('auth', {});
    const authService = authServiceFactory(auth.accessToken)

    const onSubmitHandler = async (e) => {
        e.preventDefault();
        try {
            const userData = await authService.register(formData)
            setUserData(userData);
            navigate('/');
        } catch (error) {
            console.log(error.message);
        }
    }


    return (
        <section id="register-page" className="auth">
            <form id="register" method="POST" onSubmit={onSubmitHandler}>
                <div className="container">
                    <div className="brand-logo"></div>
                    <h1>Register</h1>
                    <label htmlFor="email">Email:</label>
                    <input
                        type="email"
                        id="email"
                        name="email"
                        placeholder="example@mail.bg"
                        onChange={onChangeHandler}
                    />

                    <label htmlFor="register-pass">Password:</label>
                    <input
                        type="password"
                        id="register-password"
                        name="password"
                        onChange={onChangeHandler}
                    />
                    <label htmlFor="register-pass">Re-Password:</label>
                    <input
                        type="password"
                        id="rePass"
                        name="rePass"
                        onChange={onChangeHandler}
                    />
                    <input type="submit" className="btn submit" value="Register" />
                    <p className="field">
                        <span>If you don't have profile click <Link to="/auth/login">here</Link></span>
                    </p>
                </div>
            </form>
        </section>
    );
}