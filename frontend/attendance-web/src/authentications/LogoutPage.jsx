// src/pages/LogoutPage.jsx
import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

function LogoutPage() {
    const navigate = useNavigate();

    useEffect(() => {
        // Simulate logout logic (e.g., clearing tokens or session)
        localStorage.removeItem('authToken');

        // Redirect after delay
        const timer = setTimeout(() => {
            navigate('/authentication');
        }, 10000); // 3 seconds

        return () => clearTimeout(timer);
    }, [navigate]);

    return (
        <div style={styles.container}>
            <h1 style={styles.title}>👋 You have been logged out</h1>
            <p style={styles.text}>Thanks for visiting. Redirecting to login page...</p>
        </div>
    );
}

const styles = {
    container: {
        padding: '3rem',
        textAlign: 'center',
        fontFamily: 'Arial, sans-serif',
        backgroundColor: '#fefefe',
    },
    title: {
        fontSize: '2rem',
        marginBottom: '1rem',
    },
    text: {
        fontSize: '1.2rem',
        color: '#555',
    },
};

export default LogoutPage;
