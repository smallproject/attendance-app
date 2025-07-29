// src/pages/EmployeePage.jsx
import React from 'react';

const employee = {
    id: 1,
    name: 'Alice Johnson',
    role: 'Frontend Developer',
    department: 'Engineering',
    email: 'alice.johnson@example.com',
    phone: '+1 (555) 123-4567',
    status: 'Active',
    bio: 'Passionate about building intuitive web interfaces and user-friendly experiences.',
};

function EmployeePage() {
    return (
        <div style={styles.container}>
            <h1 style={styles.title}>👤 Employee Details</h1>
            <div style={styles.card}>
                <p><strong>Name:</strong> {employee.name}</p>
                <p><strong>Role:</strong> {employee.role}</p>
                <p><strong>Department:</strong> {employee.department}</p>
                <p><strong>Email:</strong> {employee.email}</p>
                <p><strong>Phone:</strong> {employee.phone}</p>
                <p><strong>Status:</strong> {employee.status}</p>
                <p><strong>Bio:</strong> {employee.bio}</p>

                <br/>
                <br/>
                <br/>
                <p><strong>You are now logged in</strong></p>
                <p><button>Logout</button></p>
            </div>
        </div>
    );
}

const styles = {
    container: {
        padding: '2rem',
        fontFamily: 'Verdana, sans-serif',
        backgroundColor: '#f9f9f9',
    },
    title: {
        textAlign: 'center',
        marginBottom: '1.5rem',
    },
    card: {
        maxWidth: '600px',
        margin: 'auto',
        padding: '1.5rem',
        backgroundColor: '#fff',
        borderRadius: '8px',
        boxShadow: '0px 2px 8px rgba(0,0,0,0.1)',
    },
};

export default EmployeePage;
