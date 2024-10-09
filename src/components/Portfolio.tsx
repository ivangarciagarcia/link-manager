import React from 'react';
import './Portfolio.css';

const Portfolio: React.FC = () => {
  return (
    <section className="portfolio-container">
        <p className="portfolio-title">Portfolio</p>
        <div className='portfolio-square'>
            <p>Descubre mas sobre mi carrera profesional</p>
            <button onClick={() => window.open('https://ivangg.dev', '_blank')}>Portfolio</button>
        </div>
    
      
    </section>
  );
};

export default Portfolio;
