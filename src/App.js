import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import MainPage from './components/User/MainPage';
import CalendarView from './components/User/CalendarView';
import Dashboard from './components/User/Dashboard';
import CompanyManagement from './components/Admin/CompanyManagement';
import LoginPage from './components/Auth/Login'; // Import the LoginPage component

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LoginPage />} /> {/* Default route goes to LoginPage */}
        <Route path="/main" element={<MainPage />} />
        <Route path="/calendar-view" element={<CalendarView />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/admin/company-management" element={<CompanyManagement />} />
      </Routes>
    </Router>
  );
};

export default App;
