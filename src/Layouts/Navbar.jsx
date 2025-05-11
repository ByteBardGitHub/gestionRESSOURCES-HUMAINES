// src/Layouts/Navbar.jsx
import React from 'react';
import { BsBell, BsPersonCircle } from 'react-icons/bs';

export default function Navbar({ collapsed, sidebarWidth }) {
  return (
    <nav
      className="bg-dark text-white d-flex justify-content-between align-items-center px-4"
      style={{
        position: 'fixed',
        top: 0,
        left: sidebarWidth,
        width: `calc(100% - ${sidebarWidth}px)`,
        height: '60px',
        zIndex: 1000,
        transition: 'left 0.3s, width 0.3s',
      }}
    >
      <div />
      <div className="d-flex align-items-center gap-3">
        <BsBell size={20} />
        <BsPersonCircle size={24} />
      </div>
    </nav>
  );
}
