import React from 'react';
import { Redirect } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

const AdminDashboard = () => {
  const { state } = useAuth();

  if (!state.isAuthenticated || state.role !== 'admin') {
    // Redirect to login if not authenticated or not an admin
    return <Redirect to="/login" />;
  }

  return (
    <div>
      <h2>Admin Dashboard</h2>
      {/* Admin dashboard content */}
    </div>
  );
};

export default AdminDashboard;