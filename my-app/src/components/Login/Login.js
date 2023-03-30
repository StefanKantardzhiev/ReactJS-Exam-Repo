import { useAuthContext } from "../../contexts/AuthContext";
import { useForm } from "../../hooks/useForm";
import { Link } from "react-router-dom";


const LoginFormKeys = {
    Username: 'username',
    Password: 'password'
};



export const Login = () => {
    const { onLoginSubmit } = useAuthContext();
    const { values, changeHandler, onSubmit } = useForm({
        [LoginFormKeys.Username]: '',
        [LoginFormKeys.Password]: '',
    }, onLoginSubmit);
    return (
        <section id="login-page" className="auth">
            <form id="login" method="POST" onSubmit={onSubmit}>
                <div className="container">
                    <div className="brand-logo"></div>
                    <h1>Login</h1>
                    <label htmlFor="username">Username:</label>
                    <input
                        type="text"
                        id="nickname"
                        placeholder="Nickname"
                        name={LoginFormKeys.Username}
                        value={values[LoginFormKeys.Username]}
                        onChange={changeHandler}
                    />
                    <label htmlFor="login-pass">Password:</label>
                    <input
                        type="password"
                        id="login-password"
                        name={LoginFormKeys.Password}
                        value={values[LoginFormKeys.Password]}
                        onChange={changeHandler}
                    />
                    <input type="submit" className="btn submit" value="Login" />
                    <p className="field">
                        <span>If you don't have profile click <a href="/login">here</a></span>
                    </p>
                </div>
            </form>
        </section>
    )
}

