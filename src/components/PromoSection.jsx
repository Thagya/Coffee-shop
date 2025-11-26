import React from 'react';
import Button from './Button';
import '../styles/PromoSection.css';

const PromoSection = () => {
  return (
    <section className="promo-section">
      <div className="promo-container">
        <div className="promo-image left">
          <img src="/images/product3.jpg" alt="Coffee preparation" />
        </div>
        
        <div className="promo-content">
          <h2 className="promo-title">Check Out Our Best Coffee Products</h2>
          <Button variant="secondary" size="medium" icon="»">
            Purchase Our Products
          </Button>
        </div>
        
        <div className="promo-image right">
          <img src="/images/product6.jpg" alt="Coffee latte art" />
        </div>
      </div>
    </section>
  );
};

export default PromoSection;