import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Login.module.css';

const LoginPage = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();

        // Perform login validation (e.g., API call)
        if (email === 'user@example.com' && password === 'password') {
            // Navigate to the main page after successful login
            navigate('/main');
        } else {
            alert('Invalid email or password');
        }
    };

    return (
        <div className="center">
            <form onSubmit={handleSubmit}>
                <h2>Login to Your Account</h2>
                <label htmlFor="email">Email:</label>
                <input
                    type="email"
                    id="email"
                    name="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                />

                <label htmlFor="password">Password:</label>
                <input
                    type="password"
                    id="password"
                    name="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                />

                <input type="submit" value="Login" />
                
            </form>
        </div>
    );
};

export default LoginPage;
