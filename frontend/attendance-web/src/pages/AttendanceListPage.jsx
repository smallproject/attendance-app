// EmployeeListPage.jsx
import React from 'react';

// Sample data - can be replaced with API call
const employeeData = [
    { id: 1, name: 'Alice Johnson', department: 'Engineering' },
    { id: 2, name: 'Bob Smith', department: 'Marketing' },
    { id: 3, name: 'Carol Nguyen', department: 'Finance' },
];

function EmployeeListPage() {
    return (
        <div style={styles.container}>
            <h1 style={styles.title}>Attendance</h1>
            <table style={styles.table}>
                <thead>
                <tr>
                    <th>ID</th>
                    <th>Name</th>
                    <th>Department</th>
                </tr>
                </thead>
                <tbody>
                {employeeData.map((emp) => (
                    <tr key={emp.id}>
                        <td>{emp.id}</td>
                        <td>{emp.name}</td>
                        <td>{emp.department}</td>
                    </tr>
                ))}
                </tbody>
            </table>
        </div>
    );
}

const styles = {
    container: {
        fontFamily: 'Arial, sans-serif',
        padding: '2rem',
        backgroundColor: '#f9f9f9',
    },
    title: {
        textAlign: 'center',
        marginBottom: '1.5rem',
    },
    table: {
        width: '100%',
        textAlign: 'left',
        borderCollapse: 'collapse',
    },
};

export default EmployeeListPage;
