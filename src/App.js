// import logo from './logo.svg';
import React from 'react';
import { useState } from 'react';

import './App.css';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';


import Login from './components/Login/Login';
import Signup from './components/Signup/Signup';
import AdminDashboard from './components/Admin/AdminDashboard';
import AgentDashboard from './components/Agent/AgentDashboard';
import Users from './scenes/Users';
import PrivateRoute from './Routes/PrivateRoutes';

function PageContent() {
  const [user, setUser] = useState(null);

  const isAuthenticated = localStorage.getItem('token');
  const requiredRole = localStorage.getItem('role');
  console.log("isAuthenticated");
  console.log(isAuthenticated);
  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={
            isAuthenticated ? <Navigate to="/dashboard" /> : <Login setUser={setUser} />
          }
        />
        <Route path="/signup" element={<Signup setUser={setUser} />} />
        <Route path="/dashboard/*" element={<Dashboard user={user} />} />
        <Route path="/agent-dashboard" element={<AgentDashboard />} />
        <Route path='/users'  element={  isAuthenticated ? <Users  /> : <Login setUser={setUser} />} />
    
      </Routes>
    </Router>
  );
}
function Dashboard({ user }) {
  if (!user) {
    return <Navigate to="/" />;
  }

  return (
    <div>
      {user.role === 0 ? <AdminDashboard /> : <AgentDashboard />}
    </div>
  );
}

export default PageContent;
