import { Home } from "../Home/Home";
import { Route, Routes } from 'react-router-dom'
import { Link } from "react-router-dom";


export const Navigation = () => {
    return (
        <header className="header">
            <nav>
                <Link to="/"><img src="../images/download-removebg-preview.png" className="logo"/></Link>
                <ul>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/about">About</Link></li>
                    <li><Link to="/contacts">Contacts</Link></li>
                    <li><Link to="/catalog">All Games</Link></li>

                    <li><Link to="/create">Add Game</Link></li>
                    <li><Link to="#">Logout</Link></li>

                    <li><Link to="/login">Login</Link></li>
                    <li><Link to="/register">Register</Link></li>
                </ul>
            </nav>
        </header>
    );
}

function home() {
    <Routes>
        <Route path='/' element={<Home />} />
    </Routes>
}