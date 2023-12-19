

import { useState, useContext   } from "react";

import { AuthContext } from "../../context/AuthContext";

import styles from './Register.module.css'

export const Register = () => {
    const {onRegister} = useContext(AuthContext);

    const[values, setValues] = useState({
        email: '',
        password: '',
        confirmPass: ''
    })

    const onChangeHandler = (e) => {
        setValues(state => ({...state, [e.target.name]: e.target.value}));
    };
    
    const onSubmit = (e) => {
        e.preventDefault();
        onRegister(values);
    }

    return (
        <main id="register" className={styles.register}>
            <div id="box" className={styles.box}>
                <h1>Register</h1>
                <form  method="post" onSubmit={onSubmit}>
                    <label>Email</label>
                    <input type="text" name="email" placeholder="Email.." value={values.email} onChange={onChangeHandler}/>
                    <label>Password</label>
                    <input type="password" name="password" placeholder="Password.." value={values.password} onChange={onChangeHandler}/>
                    <label>Confirm Password</label>
                    <input type="password" name="confirmPass" placeholder="Confirm Password.." value={values.confirmPass} onChange={onChangeHandler}/>
                    <input type="submit" defaultValue="Register" />
                </form>
                <p>
                    Already have an account? <a href="/login">Login here</a>
                </p>
            </div>
        </main>
    );
}