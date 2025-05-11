// src/Layouts/Footer.jsx
import React from 'react';

export default function Footer({ collapsed, sidebarWidth }) {
  return (
    <footer
      className="bg-dark text-white text-center py-2"
      style={{
        position: 'fixed',
        bottom: 0,
        left: sidebarWidth,
        width: `calc(100% - ${sidebarWidth}px)`,
        zIndex: 999,
        transition: 'left 0.3s, width 0.3s',
      }}
    >
      <p className="mb-0">© 2025 made by OUALID SAAD ACHRAF</p>
    </footer>
  );
}
