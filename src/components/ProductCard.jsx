import React, { useState } from 'react';
import Button from './Button';
import '../styles/ProductCard.css';

const ProductCard = ({ image, title, description, price }) => {
  const [liked, setLiked] = useState(false);

  return (
    <div className="product-card">
      <div className="product-image-wrapper">
        <img src={image} alt={title} className="product-image" />
        <button 
          className={`product-like ${liked ? 'liked' : ''}`}
          onClick={() => setLiked(!liked)}
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill={liked ? "currentColor" : "none"} xmlns="http://www.w3.org/2000/svg">
            <path d="M12 21.35L10.55 20.03C5.4 15.36 2 12.28 2 8.5C2 5.42 4.42 3 7.5 3C9.24 3 10.91 3.81 12 5.09C13.09 3.81 14.76 3 16.5 3C19.58 3 22 5.42 22 8.5C22 12.28 18.6 15.36 13.45 20.04L12 21.35Z" stroke="currentColor" strokeWidth="2"/>
          </svg>
        </button>
      </div>
      <div className="product-info">
        <h3 className="product-title">{title}</h3>
        <p className="product-description">{description}</p>
        <div className="product-footer">
          <span className="product-price">Rs. {price}</span>
          <Button variant="secondary" size="small">Order Now</Button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;