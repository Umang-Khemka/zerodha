import React from 'react';
import Dashboard from "./Dashboards"; 
import TopBar from "./TopBar";
import "../styles/dashboard.css"; // Import your dashboard CSS here

function DashBoardPage() {
    return (
        <div className="dashboard-app">
            <TopBar />
            <Dashboard />
        </div>
    );
}

export default DashBoardPage;