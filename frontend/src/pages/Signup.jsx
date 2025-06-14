import React, { useState } from 'react';
import axios from 'axios';
import '../styles/auth.css';

const Signup = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const BASE_URL = process.env.REACT_APP_BACKEND_URL || "http://localhost:5000"; 
;


    const handleSignup = async (e) => {
        e.preventDefault();
        try {
            await axios.post('http://${BASE_URL}/api/auth/signup', { name, email, password });
            alert('Signup successful! Please log in.');
        } catch (error) {
            alert('Signup failed!');
        }
    };

    return (
        <div className="auth-container">
            <h2>Signup</h2>
            <form onSubmit={handleSignup}>
                <input type="text" placeholder="Name" value={name} onChange={(e) => setName(e.target.value)} />
                <input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} />
                <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />
                <button type="submit">Signup</button>
                <p>Already have an account? <a href="/login">Login here</a></p>

            </form>
        </div>
    );
};

export default Signup;
