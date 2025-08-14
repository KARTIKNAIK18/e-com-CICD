import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import '../styles/auth.css';

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const BASE_URL = import.meta.env.VITE_BACKEND_URL || "http://localhost:5000";
    console.log("Backend URL:", BASE_URL);

    const handleLogin = async (e) => {
        e.preventDefault();
        try {
            const res = await axios.post(`${BASE_URL}/api/auth/login`, { email, password });
            localStorage.setItem('token', res.data.token);
            window.location.href = "/";
        } catch (error) {
            alert('Login failed!');
        }
    };

    return (
        <div className="auth-container">
            <h2>Login</h2>
            <form onSubmit={handleLogin}>
                <input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} />
                <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />
                <button type="submit">Login</button>
            </form>
            <p>Don't have an account? <Link to="/signup">Sign up here</Link></p> {/* ✅ Added Sign-up Link */}
        </div>
    );
};

export default Login;
