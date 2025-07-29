// src/pages/NotFoundPage.jsx
import React from 'react';
import { Link } from 'react-router-dom';

function NotFoundPage() {
    return (
        <div style={styles.container}>
            <h1 style={styles.title}>404 - Page Not Found</h1>
            <p style={styles.message}>
                Oops! The page you’re looking for doesn’t exist or has moved.
            </p>
            <Link to="/" style={styles.homeLink}>⏎ Return to Home</Link>
        </div>
    );
}

const styles = {
    container: {
        textAlign: 'center',
        padding: '3rem',
        fontFamily: 'Segoe UI, sans-serif',
        backgroundColor: '#f8f9fa',
        color: '#333',
    },
    title: {
        fontSize: '2.5rem',
        marginBottom: '1rem',
    },
    message: {
        fontSize: '1.2rem',
        marginBottom: '2rem',
    },
    homeLink: {
        fontSize: '1rem',
        textDecoration: 'none',
        color: '#0078d4',
        backgroundColor: '#e6f0ff',
        padding: '0.5rem 1rem',
        borderRadius: '4px',
    },
};

export default NotFoundPage;