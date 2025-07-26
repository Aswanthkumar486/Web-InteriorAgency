import React from 'react';
import styles from '../styles/Navbar.module.css';

export default function Navbar({ data, logo }) {
  return (
    <nav className={`navbar navbar-expand-lg fixed-top  ${styles.navbar}`} style={{backgroundColor:'rgb(147, 233, 10)',fontFamily: 'Caveat' }}>
      <div className='container-fluid d-flex align-items-center'>
       <a href='#'> <img
          src={logo.logo}
          className='img-thumbnail me-2'
          alt='logo'
          height={40}
          width={40}
          style={{ objectFit: 'cover', border: 'none', borderRadius: '8px' }}
        />
        </a>
        

        <button
          className='navbar-toggler ms-auto'
          type='button'
          data-bs-toggle='collapse'
          data-bs-target='#navbarText'
          aria-controls='navbarText'
          aria-expanded='false'
          aria-label='Toggle navigation'
        >
          <span className='navbar-toggler-icon'></span>
        </button>
      </div>

      <div className='collapse navbar-collapse' id='navbarText'>
        <ul className='navbar-nav me-auto mb-2 mb-lg-0'>
          {data.map((ele, index) => (
            <li className={`nav-item h5 ${styles.navItem}`} key={index}>
              <a className={`nav-link d-flex align-items-center gap-2 ${styles.navLink}`} href={ele.link}>
                <i className={ele.icon} style={{ color: '#040900a4' }}></i>
                {ele.name}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}
