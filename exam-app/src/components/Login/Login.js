import { Link } from "react-router-dom";

// import { useAuthContext } from "../../contexts/AuthContext";
// import { useForm } from "../../hooks/useForm";

// const LoginFormKeys = {
//     Email: 'email',
//     Password: 'password'
// };

export const Login = () => {
    return (
        <section id="login-page" className="auth">
            <form id="login" method="POST">
                <div className="container">
                    <div className="brand-logo"></div>
                    <h1>Login</h1>
                    <label htmlFor="email">Email:</label>
                    <input
                        type="email"
                        id="email"
                        name="email"
                        placeholder="Sokka@gmail.com"
                    />

                    <label htmlFor="login-pass">Password:</label>
                    <input
                        type="password"
                        id="login-password"
                        name="email"
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