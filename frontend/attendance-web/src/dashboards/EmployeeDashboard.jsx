// src/pages/EmployeeDashboard.jsx
import React from 'react';

const employeeList = [
    { id: 1, name: 'Alice Johnson', role: 'Frontend Developer', department: 'Engineering', status: 'Active' },
    { id: 2, name: 'Bob Smith', role: 'Digital Marketer', department: 'Marketing', status: 'On Leave' },
    { id: 3, name: 'Carol Nguyen', role: 'Accountant', department: 'Finance', status: 'Active' },
];

function EmployeeDashboard() {
    return (
        <div style={styles.page}>
            <h1 style={styles.heading}>👥 Employee Dashboard</h1>
            <table style={styles.table}>
                <thead>
                <tr>
                    <th>Name</th>
                    <th>Role</th>
                    <th>Department</th>
                    <th>Status</th>
                </tr>
                </thead>
                <tbody>
                {employeeList.map((emp) => (
                    <tr key={emp.id} style={emp.status === 'On Leave' ? styles.leaveRow : null}>
                        <td>{emp.name}</td>
                        <td>{emp.role}</td>
                        <td>{emp.department}</td>
                        <td>{emp.status}</td>
                    </tr>
                ))}
                </tbody>
            </table>
        </div>
    );
}

const styles = {
    page: {
        padding: '2rem',
        fontFamily: 'Segoe UI, sans-serif',
        backgroundColor: '#eef2f5',
    },
    heading: {
        textAlign: 'center',
        marginBottom: '2rem',
    },
    table: {
        width: '100%',
        textAlign: 'left',
        borderCollapse: 'collapse',
        backgroundColor: '#ffffff',
    },
    leaveRow: {
        backgroundColor: '#fff4e5',
    },
};

export default EmployeeDashboard;
