import { Home } from "../Home/Home";
import { Route, Routes } from 'react-router-dom'


export const Navigation = () => {
    return (
        <header className="header">
            <nav>
                <a href="/"><img src="../images/download-removebg-preview.png" className="logo"/></a>
                <ul>
                    <li><a href="/">Home</a></li>
                    <li><a href="/cataloge">All Games</a></li>
                    <li><a href="/create">Add Game</a></li>
                    <li><a href="/about">About</a></li>
                    <li><a href="/contacts">Contacts</a></li>
                    <li><a href="/login">Login</a></li>
                    <li><a href="/register">Register</a></li>
                    <li><a href="#">Logout</a></li>
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