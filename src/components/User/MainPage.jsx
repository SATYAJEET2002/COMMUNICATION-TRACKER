import React from 'react';
import { Link } from 'react-router-dom'; // Import Link from React Router
import './MainPage.css'; // Import the CSS file for styling

const MainPage = () => {
  return (
    <div className="main-page">
      <section className="hero">
        <h1>Welcome to MyApp!</h1>
        <p>Your go-to solution for managing tasks and events seamlessly.</p>
        <button className="cta-button">
          <a href="#features" style={{ color: 'inherit', textDecoration: 'none' }}>Get Started</a>
        </button>
      </section>

      <section className="features" id="features">
        <h2>Key Features</h2>
        <div className="feature-cards">
          <div className="card">
            <h3><Link to="/calendar-view">Calendar View</Link></h3> 
            <p>Plan and track your events and tasks with ease.</p>
          </div>
          <div className="card">
            <h3><Link to="/dashboard">Dashboard</Link></h3> 
            <p>View insights and manage your data efficiently.</p>
          </div>
          <div className="card">
            <h3><Link to="/admin/company-management">Company Management</Link></h3> 
            <p>Manage communication and company details seamlessly.</p>
          </div>
        </div>
      </section>

      <footer className="footer" id="contact">
        <p>&copy; 2024 MyApp. All Rights Reserved.</p>
        <div className="social-links">
          <a href="#">Facebook</a>
          <a href="#">Twitter</a>
          <a href="#">Instagram</a>
        </div>
      </footer>
    </div>
  );
};

export default MainPage;
