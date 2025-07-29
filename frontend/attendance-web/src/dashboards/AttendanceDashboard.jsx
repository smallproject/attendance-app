// src/pages/AttendanceDashboard.jsx
import React from 'react';

const attendanceData = [
    {
        id: 1,
        name: 'Alice Johnson',
        department: 'Engineering',
        date: '2025-07-28',
        time: '09:00',
        status: 'Present',
    },
    {
        id: 2,
        name: 'Bob Smith',
        department: 'Marketing',
        date: '2025-07-28',
        time: '09:15',
        status: 'Late',
    },
    {
        id: 3,
        name: 'Carol Nguyen',
        department: 'Finance',
        date: '2025-07-28',
        time: 'Absent',
        status: 'Absent',
    },
];

function AttendanceDashboard() {
    return (
        <div style={styles.container}>
            <h1 style={styles.title}>📋 Employee Attendance Dashboard</h1>
            <table style={styles.table}>
                <thead>
                <tr>
                    <th>Name</th>
                    <th>Department</th>
                    <th>Date</th>
                    <th>Time</th>
                    <th>Status</th>
                </tr>
                </thead>
                <tbody>
                {attendanceData.map((emp) => (
                    <tr key={emp.id} style={emp.status === 'Absent' ? styles.absentRow : null}>
                        <td>{emp.name}</td>
                        <td>{emp.department}</td>
                        <td>{emp.date}</td>
                        <td>{emp.time}</td>
                        <td>{emp.status}</td>
                    </tr>
                ))}
                </tbody>
            </table>
        </div>
    );
}

const styles = {
    container: {
        padding: '2rem',
        fontFamily: 'Arial, sans-serif',
        backgroundColor: '#f4f6f8',
        textAlign: 'left',
    },
    title: {
        textAlign: 'center',
        marginBottom: '2rem',
    },
    table: {
        width: '100%',
        borderCollapse: 'collapse',
        backgroundColor: '#fff',
    },
    absentRow: {
        backgroundColor: '#ffe5e5',
    },
};

export default AttendanceDashboard;
