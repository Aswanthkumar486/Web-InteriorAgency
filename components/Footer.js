import React from 'react';

export default function Footer({ logo, navData }) {
  return (
    <footer className="bg-dark text-light py-4" style={{fontFamily: 'Caveat' }}>
      <div className="container d-flex flex-column flex-md-row justify-content-between align-items-center text-center text-md-start">
        
        {/* Logo */}
        <div className="mb-3 mb-md-0">
          <img 
            src={logo.logo} 
            alt={logo.name} 
            style={{ width: '150px', height: 'auto', objectFit: 'contain' }} 
          />
        </div>

        {/* Copyright */}
        <div className="mb-3 mb-md-0">
          <h3 className="mb-0">{logo.copyright}</h3>
        </div>

        {/* Navigation Links with Arrows */}
        <div>
          <ul className="list-unstyled">
            {navData.map((ele, i) => (
              <li key={i} className="mb-2 d-flex align-items-center">
                <i className="fas fa-angle-right me-2 text-success"></i>
                <a href={ele.link} className="text-light text-decoration-none">
                  {ele.name}
                </a>
              </li>
            ))}
          </ul>
        </div>

      </div>
    </footer>
  );
}
