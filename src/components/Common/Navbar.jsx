// src/components/Common/Navbar.jsx
import React from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <nav>
      <Link to="/">Login</Link>
      <Link to="/user">Dashboard</Link>
      <Link to="/admin">Admin</Link>
    </nav>
  );
}

export default Navbar;
