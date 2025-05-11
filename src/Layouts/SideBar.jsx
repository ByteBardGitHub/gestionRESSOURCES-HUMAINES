import 'bootstrap/dist/css/bootstrap.min.css';

import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import {
  BsColumnsGap,
  BsPeople,
  BsGridFill,
  BsGear,
  BsBoxArrowRight,
  BsChevronDown,
  BsChevronUp,
  BsList,
  BsX
} from 'react-icons/bs';

export default function Sidebar({ collapsed, onToggle }) {
  const [divOpen, setDivOpen] = useState(false);

  const activeClass = 'bg-secondary bg-gradient text-white shadow';
  const hoverClass = 'text-white hover-bg-secondary';

  const IconWrapper = ({ children }) => (
    <div
      style={{ width: '24px', height: '24px', minWidth: '24px' }}
      className="d-flex justify-content-center align-items-center"
    >
      {children}
    </div>
  );

  const linkClass = (isActive) => {
    const base = isActive ? activeClass : hoverClass;
    return `d-flex align-items-center ${base} rounded mb-2` +
      (collapsed
        ? ' justify-content-center py-3 px-0'
        : ' px-3 py-2');
  };

  return (
    <nav
      className="bg-dark text-white d-flex flex-column p-2"
      style={{
        width: `${collapsed ? 60 : 240}px`,
        height: '100vh',
        transition: 'width 0.3s, padding 0.3s',
      }}
    >
      <button
        className="btn p-2 bg-transparent border-0 text-white align-self-end mb-3"
        onClick={onToggle}
      >
        <IconWrapper>
          {collapsed ? <BsList size={20} /> : <BsX size={20} />}
        </IconWrapper>
      </button>

      {!collapsed && (
        <h5 className="text-center fw-bold mb-4">HR Management</h5>
      )}

      <NavLink
        to="/pages/Dashboard"
        
        className={({ isActive }) => linkClass(isActive)}
        style={{ textDecoration: 'none' }}
      >
        <IconWrapper><BsColumnsGap size={20} /></IconWrapper>
        {!collapsed && <span>Dashboard</span>}
      </NavLink>

      <NavLink
        to="/pages/Employees"
        className={({ isActive }) => linkClass(isActive)}
        style={{ textDecoration: 'none' }}
      >
        <IconWrapper><BsPeople size={20} /></IconWrapper>
        {!collapsed && <span>Employés</span>}
      </NavLink>

      <button
        className={`btn btn-dark d-flex align-items-center w-100 rounded mb-2 ${hoverClass}` +
          (collapsed ? ' justify-content-center py-3 px-0' : ' px-3 py-2')}
        onClick={() => setDivOpen(!divOpen)}
      >
        <IconWrapper><BsGridFill size={20} /></IconWrapper>
        {!collapsed && <span className="flex-grow-1 text-start">Departments</span>}
        {!collapsed && (divOpen ? <BsChevronUp /> : <BsChevronDown />)}
      </button>

      {!collapsed && divOpen && (
        <div className="ms-4 mb-2">
          <NavLink
            to="/pages/divisions/HRdivision"
            className={({ isActive }) =>
              `d-block rounded mb-1 ${isActive ? activeClass : hoverClass}`
            }
            style={{ textDecoration: 'none', fontSize: '0.9rem', padding: '0.25rem 1rem' }}
          >
            Department 1
          </NavLink>
          <NavLink
            to="/pages/divisions/Gestiondivision"
            className={({ isActive }) =>
              `d-block rounded ${isActive ? activeClass : hoverClass}`
            }
            style={{ textDecoration: 'none', fontSize: '0.9rem', padding: '0.25rem 1rem' }}
          >
            Department 2
          </NavLink>
        </div>
      )}

      <div className="mt-auto">
        <NavLink
          to="/pages/Settings"
          className={({ isActive }) => linkClass(isActive)}
          style={{ textDecoration: 'none' }}
        >
          <IconWrapper><BsGear size={20} /></IconWrapper>
          {!collapsed && <span>Paramètres</span>}
        </NavLink>
        <NavLink
          to="/pages/Logout"
          className={({ isActive }) => linkClass(isActive)}
          style={{ textDecoration: 'none' }}
        >
          <IconWrapper><BsBoxArrowRight size={20} /></IconWrapper>
          {!collapsed && <span>Logout</span>}
        </NavLink>
      </div>
    </nav>
  );
}
