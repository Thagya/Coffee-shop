import React from 'react';
import Button from './Button';
import '../styles/Hero.css';

const Hero = () => {
  return (
    <section className="hero" id="home">
      <div className="hero-content">
        <p className="hero-welcome">WELCOME</p>
        <h1 className="hero-title">
          Experience the<br />
          most flavorful<br />
          coffee in town!
        </h1>
        <p className="hero-subtitle">
          Crafted with passion, served with love — your favorite coffee awaits
        </p>
        <Button variant="primary" size="medium">
          Order Now
        </Button>
      </div>
    </section>
  );
};

export default Hero;
