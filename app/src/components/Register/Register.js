export const Register = () => {
    return (
        <div className="register-box">
            <h1>Register</h1>
            <form action="/register" method="get">
                <label>Username</label>
                <input type="text" name="" placeholder="Username.." />
                <label>Email</label>
                <input type="text" name="" placeholder="Email.." />
                <label>Password</label>
                <input type="password" name="" placeholder="Password.." />
                <label>Confirm Password</label>
                <input type="password" name="" placeholder="Confirm Password.." />
                <input type="submit" defaultValue="Register" />
            </form>
            <p>
                Already have an account? <a href="/login">Login here</a>
            </p>
        </div>
    );
}