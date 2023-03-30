export const Register = () => {
    return (
    
    <section id="login-page" className="content auth">
        <form id="register">
            <div className="container">
                <div className="brand-logo"></div>
                <h1>Register</h1>

                <label htmlFor="text">Nickname:</label>
                <input type="text" id="email" name="email" placeholder="NickName" />

                <label htmlFor="pass">Password:</label>
                <input type="password" name="password" id="register-password" />

                <label htmlFor="con-pass">Confirm Password:</label>
                <input type="password" name="confirm-password" id="confirm-password" />

                <input className="btn submit" type="submit" value="Register" />

                <p className="field">
                    <span>If you already have profile click <a href="/login">here</a></span>
                </p>
            </div>
        </form>
    </section>)
}