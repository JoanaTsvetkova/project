import { AuthContext } from "../../context/AuthContext";

import { useContext, useState } from "react";

import styles from './Login.module.css'



export const Login = () => {
    const {onLogin} = useContext(AuthContext);
    const [values, setValues] = useState({
        email: '',
        password: ''
    });

    const changeHandler = (e) => {
        setValues(state => ({...state, [e.target.name]: e.target.value}));
    };

    const onSubmit = (e) => {
        e.preventDefault();

        onLogin(values);
    };
    return (
        <main id="login" className={styles.login}>
            <div id="loginBox" className={styles.loginBox}>
                <h1>Login</h1>
                <form onSubmit={onSubmit}>
                    <label htmlFor="email">Email</label>
                    <input type="email" name="email" placeholder="Email.." value={values.email} onChange={changeHandler}/>
                    <label htmlFor="login-password">Password</label>
                    <input type="password" name="password" placeholder="Password.." value={values.password} onChange={changeHandler}/>
                    <input type="submit" defaultValue="Login" />
                </form>
                <p>
                    Don't have an account? <a href="/register">Sign up</a>
                </p>
            </div>
        </main>

    );
}