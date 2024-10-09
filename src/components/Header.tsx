import React from 'react';
import './Header.css';

const Header: React.FC = () => {
  return (
    <section className="header">
      <img 
        className="profile-image"
        src="../../../public/avatar1.png"
        alt="Profile"
      />
      <div className='header-content'>
        <h1 className='header-title'>Ivan Garcia</h1>
        <p className='header-subtitle'>Desarrollador Fullstack</p>
      </div>
     
    </section>
  );
};

export default Header;
