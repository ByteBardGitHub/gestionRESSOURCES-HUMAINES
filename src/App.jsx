// src/App.jsx
import React, { useState } from 'react';
import Sidebar from './Layouts/SideBar';
import Navbar from './Layouts/Navbar';
import Footer from './Layouts/Footer';
import { Routes, Route } from 'react-router-dom';
import Dashboard from './pages/Dashboard';
import HRDivision from './pages/divisions/HRdivision';
import Gestiondivision from './pages/divisions/Gestiondivision';
import Employees from './pages/Employees';
import Settings from './pages/Settings';
import Logout from './pages/Logout';

export default function App() {
  const [collapsed, setCollapsed] = useState(false);
  const sidebarWidth = collapsed ? 60 : 240;

  return (
    <div style={{ display: 'flex', minHeight: '100vh' }}>
      <Sidebar collapsed={collapsed} onToggle={() => setCollapsed(!collapsed)} />

      {/* Main Content Container */}
      <div
        style={{
          flex: 1,
          display: 'flex',
          flexDirection: 'column',
          marginLeft: `${sidebarWidth}px`,
          transition: 'margin-left 0.3s ease',
          minHeight: '100vh'
        }}
      >
        <Navbar collapsed={collapsed} sidebarWidth={sidebarWidth} />

        <main style={{ marginTop: 60, marginBottom: 40, flex: 1 }}>
          <Routes>
            <Route path="/pages/Dashboard" element={<Dashboard />} />
            <Route path="/pages/divisions/HRDivision" element={<HRDivision />} />
            <Route path="/pages/divisions/Gestiondivision" element={<Gestiondivision />} />
            <Route path="/pages/Employees" element={<Employees />} />
            <Route path="/pages/settings" element={<Settings />} />
            <Route path="/pages/Logout" element={<Logout />} />
          </Routes>
        </main>

        <Footer collapsed={collapsed} sidebarWidth={sidebarWidth} />
      </div>
    </div>
  );
}
