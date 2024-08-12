import React from 'react';
import "./HeroSection.css"

const HeroSection = () => {
  return (
    <section id="hero">
      <div className="hero-content">
        {/* <img src="/images/air-max-infinity-black.jpg" alt="Nike Air Max Infinity" /> */}
        <h1>Nike Air Max Infinity</h1>
        <p>The perfect balance of comfort and performance</p>
        <button>Shop Now</button>
      </div>
    </section>
  );
};

export default HeroSection;
