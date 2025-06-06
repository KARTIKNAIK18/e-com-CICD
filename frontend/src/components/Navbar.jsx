import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import '../styles/navbar.css';

const Navbar = () => {
    const token = localStorage.getItem('token');
    const navigate = useNavigate();

    const handleLogout = () => {
        localStorage.removeItem('token');
        navigate('/login');
    };

    return (
        <nav className="navbar">
            <Link to="/" className="logo">ShopEasy</Link>
            <div className="nav-links">
                <Link to="/wishlist" className="wishlist-link">📝</Link>
                <Link to="/cart" className="cart-link">🛒 Cart</Link>
                {token ? (
                    <button className="auth-button logout-btn" onClick={handleLogout}>Logout</button>
                ) : (
                    <Link to="/login" className="auth-button">Login</Link>
                )}
            </div>
        </nav>
    );
};

export default Navbar;
