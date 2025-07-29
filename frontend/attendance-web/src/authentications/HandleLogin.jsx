// src/pages/LoginPage.jsx
import React, { useState } from 'react';

function LoginPage() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleLogin = (e) => {
        e.preventDefault();
        console.log('Logging in with', email, password);
        // Implement API call or authentication logic here
    };

    return (
        <div style={styles.container}>
            <h1 style={styles.title}>🔐 Employee Login</h1>
            <form onSubmit={handleLogin} style={styles.form}>
                <label>Email:</label>
                <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                    style={styles.input}
                />

                <label>Password:</label>
                <input
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                    style={styles.input}
                />

                <button type="submit" style={styles.button}>Login</button>
            </form>
        </div>
    );
}

const styles = {
    container: {
        padding: '2rem',
        maxWidth: '400px',
        margin: 'auto',
        backgroundColor: '#f0f4f8',
        borderRadius: '8px',
        boxShadow: '0px 4px 12px rgba(0,0,0,0.1)',
        fontFamily: 'Segoe UI, sans-serif',
    },
    title: {
        textAlign: 'center',
        marginBottom: '2rem',
    },
    form: {
        display: 'flex',
        flexDirection: 'column',
    },
    input: {
        marginBottom: '1rem',
        padding: '0.5rem',
        borderRadius: '4px',
        border: '1px solid #ccc',
        fontSize: '1rem',
    },
    button: {
        padding: '0.75rem',
        backgroundColor: '#0078d4',
        color: '#fff',
        border: 'none',
        borderRadius: '4px',
        cursor: 'pointer',
        fontSize: '1rem',
    },
};

export default LoginPage;
