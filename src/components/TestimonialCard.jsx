import React from 'react';
import '../styles/TestimonialCard.css';

const TestimonialCard = ({ name, role, content, rating, image }) => {
  return (
    <div className="testimonial-card">
      <div className="testimonial-header">
        <img src={image} alt={name} className="testimonial-avatar" />
        <div className="testimonial-info">
          <h4 className="testimonial-name">{name}</h4>
          <p className="testimonial-role">{role}</p>
        </div>
      </div>
      
      <div className="testimonial-rating">
        {[...Array(rating)].map((_, index) => (
          <svg key={index} width="20" height="20" viewBox="0 0 20 20" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
            <path d="M10 0L12.2451 6.90983H19.5106L13.6327 11.1803L15.8779 18.0902L10 13.8197L4.12215 18.0902L6.36729 11.1803L0.489435 6.90983H7.75486L10 0Z"/>
          </svg>
        ))}
      </div>
      
      <p className="testimonial-content">{content}</p>
    </div>
  );
};

export default TestimonialCard;